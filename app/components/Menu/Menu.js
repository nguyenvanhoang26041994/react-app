import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Menu.scss';

export default class Menu extends React.Component {
  state = {
    activeKey: this.props.activeKey || null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey !== this.props.activeKey) {
      this.setState({ activeKey: nextProps.activeKey });
    }
  }

  onClick = (activeKey, other) =>
    this.setState({ activeKey }, () => this.props.onClick(activeKey, other));

  render() {
    const { className, children, style } = this.props;
    const { activeKey } = this.state;

    return (
      <ul className={cn('rc-menu', className)} style={style}>
        {React.Children.map(children, elm => {
          if (!React.isValidElement(elm)) {
            return null;
          }

          return React.cloneElement(elm, {
            onClick: (elmKey, other) => this.onClick(elmKey, other),
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
  onClick: PropTypes.func,
  activeKey: PropTypes.string,
  style: PropTypes.object,
};
Menu.defaultProps = {
  onClick: f => f,
};
