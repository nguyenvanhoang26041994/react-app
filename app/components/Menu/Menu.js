import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Menu.scss';

export default class Menu extends React.Component {
  isHaveActiveKey = 'activeKey' in this.props;

  state = {
    activeKey: this.isHaveActiveKey ? this.props.activeKey : null,
    visiable: true,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey !== this.props.activeKey) {
      this.setState({ activeKey: nextProps.activeKey });
    }
  }

  onChangeActivekey = (activeKey, other) => {
    if (this.isHaveActiveKey) {
      return this.props.onChangeActivekey(activeKey, other);
    }

    return this.setState({ activeKey }, () => {
      this.props.onChangeActivekey(activeKey, other);
    });
  };

  render() {
    if (!this.state.visiable) {
      return null;
    }

    const { className, children, style, defaultShow } = this.props;
    const { activeKey } = this.state;
    return (
      <ul className={cn('rc-menu', className)} style={style}>
        {React.Children.map(children, elm => {
          if (!React.isValidElement(elm)) {
            return null;
          }

          return React.cloneElement(elm, {
            onChangeActivekey: (elmKey, other) =>
              this.onChangeActivekey(elmKey, other),
            activeKey,
            defaultShow,
            elmKey: elm.key,
          });
        })}
      </ul>
    );
  }
}

Menu.propTypes = {
  className: PropTypes.string,
  defaultShow: PropTypes.bool,
  children: PropTypes.node,
  onChangeActivekey: PropTypes.func,
  activeKey: PropTypes.string,
  style: PropTypes.object,
};
Menu.defaultProps = {
  onChangeActivekey: f => f,
};
