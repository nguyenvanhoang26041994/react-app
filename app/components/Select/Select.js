import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { keyBy } from 'lodash/fp';

import Option from './Select.Option';

class Select extends React.PureComponent {
  isHasValue = 'value' in this.props;

  selectRef = React.createRef();

  state = {
    value: this.isHasValue ? this.props.value : this.props.defaultValue,
    optionsObj: keyBy('value')(this.props.options),
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

    if (nextProps.options !== this.props.options) {
      newState.optionsObj = keyBy('value')(nextProps.options);
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

  handleChange = (event, value) => {
    this.props.onChange({ target: { value } }, event);

    if (!this.isHasValue) {
      return this.setState({ value, isDropdown: false });
    }

    return null;
  };

  render() {
    const { className, options, disabled } = this.props;
    const { value, optionsObj, isDropdown } = this.state;

    return (
      <div
        className={cn(
          'rc-select',
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
          <span>{optionsObj[value].children}</span>
          <span className="rc-select__dropdown-icon">❯</span>
        </button>
        <div className="rc-select__options">
          {options.map(option => (
            <Option
              {...option}
              selected={option.value === value}
              onClick={event => this.handleChange(event, option.value)}
            />
          ))}
        </div>
      </div>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  defaultValue: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      children: PropTypes.node,
    }),
  ),
};
Select.defaultProps = {
  options: [],
  onChange: f => f,
};

export default Select;
