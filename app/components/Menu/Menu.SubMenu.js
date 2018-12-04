/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Menu from './Menu';
import './style/Menu.SubMenu.scss';

class SubMenu extends React.Component {
  state = { show: this.props.show || this.props.defaultShow };

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.props.show) {
      this.setState({ show: nextProps.show });
    }
  }

  onChangeShow = () => this.setState(prevState => ({ show: !prevState.show }));

  render() {
    const {
      className,
      title,
      onClick,
      activeKey,
      elmKey,
      ...otherProps
    } = this.props;

    return (
      <li
        className={cn(
          'rc-submenu',
          { 'rc-submenu--active': this.state.show },
          className,
        )}
      >
        <div
          className="rc-menu-item rc-submenu__title"
          onClick={this.onChangeShow}
        >
          {title}
        </div>
        <Menu
          className="rc-submenu__menu"
          activeKey={activeKey}
          onClick={onClick}
          {...otherProps}
        />
      </li>
    );
  }
}

SubMenu.displayName = 'Menu.SubMenu';
SubMenu.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  onClick: PropTypes.func,
  defaultShow: PropTypes.bool,
};
SubMenu.defaultProps = {
  defaultShow: true,
  onClick: f => f,
};

export default SubMenu;
