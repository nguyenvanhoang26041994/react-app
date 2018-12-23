import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import OptGroup from './Select.OptGroup';
import './style/Select.scss';

export const sizes = Object.freeze({
  small: 'rc-select--small',
  large: 'rc-select--large',
});

export const placements = Object.freeze({
  bottom: 'rc-select--bottom',
  'right-top': 'rc-select--right-top',
  'bottom-left': 'rc-select--bottom-left',
  'bottom-right': 'rc-select--bottom-right',
});

export const formatOptions = children => {
  const result = {};

  React.Children.map(children, elm => {
    if (!React.isValidElement(elm)) {
      return false;
    }

    // can replace by elm.type.displayName === OptGroup.displayName
    if (elm.type === OptGroup) {
      return React.Children.map(elm.props.children, elm2 => {
        if (!React.isValidElement(elm2)) {
          return false;
        }
        result[elm2.props.value] = elm2;
        return true;
      });
    }

    result[elm.props.value] = elm;
    return true;
  });

  return result;
};

class Select extends React.PureComponent {
  isHasValue = 'value' in this.props;

  selectRef = React.createRef();

  state = {
    value: this.isHasValue ? this.props.value : this.props.defaultValue,
    objKeyByValue: formatOptions(this.props.children) || {},
    isDropdown: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  componentWillReceiveProps(nextProps) {
    const newState = {};

    if (nextProps.children !== this.props.children) {
      newState.objKeyByValue = formatOptions(nextProps.children) || {};
    }

    if (nextProps.value !== this.props.value) {
      newState.value = nextProps.value;
    }

    this.setState(newState);
  }

  handleClickOutside = event => {
    if (
      this.state.isDropdown === false &&
      this.selectRef.current &&
      this.selectRef.current.contains(event.target)
    ) {
      return false;
    }

    return this.setState({ isDropdown: false });
  };

  dropdown = () =>
    this.setState(prevState => ({
      isDropdown: !prevState.isDropdown,
    }));

  handleChange = (event, truelyEvent) => {
    this.props.onChange(event, truelyEvent);

    if (!this.isHasValue) {
      return this.setState({
        value: event.target.value,
        isDropdown: false,
      });
    }

    return null;
  };

  render() {
    const { className, disabled, children, size, placement } = this.props;
    const { value, isDropdown, objKeyByValue } = this.state;

    return (
      <div
        className={cn(
          'rc-select',
          sizes[size],
          placements[placement],
          { 'rc-select--disabled': disabled },
          { 'rc-select--dropdown-visible': isDropdown },
          className,
        )}
        ref={this.selectRef}
      >
        <button
          type="button"
          className="rc-select__button"
          onClick={this.dropdown}
        >
          <span>
            {objKeyByValue[value] && objKeyByValue[value].props.children}
          </span>
          <span className="rc-select__dropdown-icon">❯</span>
        </button>
        <ul className="rc-select__options">
          {React.Children.map(children, elm => {
            if (!React.isValidElement(elm)) {
              return null;
            }
            return React.cloneElement(elm, {
              currentValue: value,
              handleChange: this.handleChange,
            });
          })}
        </ul>
      </div>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  placement: PropTypes.oneOf(Object.keys(placements)),
  value: PropTypes.any,
  onChange: PropTypes.func,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  children: PropTypes.node, // Select.Option or Select.OtpGroup
};
Select.defaultProps = {
  onChange: f => f,
  placement: 'bottom-left',
};

export default Select;
