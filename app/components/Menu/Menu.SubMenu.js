/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Menu from './Menu';
import './style/Menu.SubMenu.scss';

export const modes = Object.freeze({
  inline: 'rc-submenu--inline',
  split: 'rc-submenu--split',
});

class SubMenu extends React.Component {
  state = { show: this.props.show || this.props.defaultShow };

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.props.show) {
      this.setState({ show: nextProps.show });
    }
  }

  onChangeShow = () => this.setState(prevState => ({ show: !prevState.show }));

  render() {
    const { className, label, mode, elmKey, ...otherProps } = this.props;

    return (
      <li
        className={cn(
          'rc-submenu',
          modes[mode],
          { 'rc-submenu--active': this.state.show },
          className,
        )}
      >
        <div
          className="rc-menu-item rc-submenu__label"
          onClick={this.onChangeShow}
        >
          {label}
        </div>
        <Menu className="rc-submenu__menu" {...otherProps} />
      </li>
    );
  }
}

SubMenu.displayName = 'Menu.SubMenu';
SubMenu.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  onChangeActivekey: PropTypes.func,
  defaultShow: PropTypes.bool,
  mode: PropTypes.oneOf(['inline', 'split']),
};
SubMenu.defaultProps = {
  defaultShow: false,
  onChangeActivekey: f => f,
  mode: 'inline',
};

export default SubMenu;
