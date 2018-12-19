import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Menu.scss';

export default class Menu extends React.Component {
  state = {
    activeKey: this.props.activeKey || null,
    visiable: true,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey !== this.props.activeKey) {
      this.setState({ activeKey: nextProps.activeKey });
    }
  }

  onChangeActivekey = (activeKey, other) =>
    this.setState({ activeKey }, () => {
      this.props.onChangeActivekey(activeKey, other);

      // callback function, just used for some case like Dropdown
      this.props.callback(activeKey, other);
    });

  render() {
    if (!this.state.visiable) {
      return null;
    }

    const { className, children, style } = this.props;
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
            elmKey: elm.key,
          });
        })}
      </ul>
    );
  }
}

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onChangeActivekey: PropTypes.func,
  callback: PropTypes.func,
  activeKey: PropTypes.string,
  style: PropTypes.object,
};
Menu.defaultProps = {
  onChangeActivekey: f => f,
  callback: f => f,
};
