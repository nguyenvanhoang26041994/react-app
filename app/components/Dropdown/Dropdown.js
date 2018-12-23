/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Sticker from '../Sticker';

import './style/Dropdown.scss';

const placements = Object.freeze({
  top: 'rc-dropdown--top',
  bottom: 'rc-dropdown--bottom',
  left: 'rc-dropdown--left',
  right: 'rc-dropdown--right',
  'top-left': 'rc-dropdown--top-left',
  'left-top': 'rc-dropdown--left-top',
  'top-right': 'rc-dropdown--top-right',
  'right-top': 'rc-dropdown--right-top',
  'bottom-left': 'rc-dropdown--bottom-left',
  'left-bottom': 'rc-dropdown--left-bottom',
  'bottom-right': 'rc-dropdown--bottom-right',
  'right-bottom': 'rc-dropdown--right-bottom',
});

export default class Dropdown extends React.Component {
  state = { visible: false };

  dropdownRef = React.createRef();

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = event => {
    if (
      this.dropdownRef.current &&
      this.dropdownRef.current.contains(event.target)
    ) {
      return false;
    }

    return this.setState({ visible: false });
  };

  onChangeVisible = e => this.setState({ visible: e.target.value });

  onUnVisible = () => this.setState({ visible: false });

  render() {
    const { className, children, overlay, placement } = this.props;

    return (
      <Sticker
        visible={this.state.visible}
        onChangeVisible={this.onChangeVisible}
        placement={placement}
        overlay={
          <div
            ref={this.dropdownRef}
            className={cn('rc-dropdown', placements[placement], className)}
          >
            {overlay}
          </div>
        }
        trigger="click"
      >
        {children}
      </Sticker>
    );
  }
}

Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = {
  placement: PropTypes.oneOf(Object.keys(placements)),
  className: PropTypes.string,
  children: PropTypes.node,
  overlay: PropTypes.node,
};
Dropdown.defaultProps = {
  placement: 'bottom',
};
