import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { omit } from 'lodash/fp';

import Icon from '../Icon';
import './style/Alert.scss';

export const types = Object.freeze({
  success: 'rc-alert--success',
  info: 'rc-alert--info',
  warning: 'rc-alert--warning',
  error: 'rc-alert--error',
});
export const icons = Object.freeze({
  success: 'check',
  info: 'info',
  warning: 'exclamation',
  error: 'times',
});

class Alert extends React.PureComponent {
  timer = null;

  state = {
    isShow: true,
  };

  componentDidMount() {
    if (this.props.duration) {
      // can use fp.delay(this.props.duration)(this.closeAlert) to replace
      // howerver for best perfomance canse
      // use setTimeout and clear async task in componentWillUnmount lifecycle
      const timer = setTimeout(() => this.closeAlert(), this.props.duration);

      this.timer = timer;
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  closeAlert = () =>
    this.setState({ isShow: false }, () => this.props.onClose());

  render() {
    if (!this.state.isShow) {
      return null;
    }

    const {
      className,
      message,
      description,
      type,
      children,
      closable,
      isHideIcon,
      ...otherProps
    } = omit(['duration'])(this.props);

    return (
      <div
        {...otherProps}
        className={cn(
          'rc-alert',
          types[type],
          {
            'rc-alert--with-description': description,
            'rc-alert--with-no-icon': isHideIcon,
          },
          className,
        )}
      >
        {!isHideIcon && <Icon className="rc-alert__icon" icon={icons[type]} />}
        <span className="rc-alert__message">{message}</span>
        <span className="rc-alert__description">{description}</span>
        {closable && (
          <Icon
            className="rc-alert__closable-icon"
            icon="times"
            onClick={this.closeAlert}
          />
        )}
        {children}
      </div>
    );
  }
}

Alert.displayName = 'Alert';
Alert.propTypes = {
  duration: PropTypes.oneOfType([PropTypes.number]),
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types)),
  message: PropTypes.node.isRequired,
  description: PropTypes.node,
  children: PropTypes.node,
};
Alert.defaultProps = {
  type: 'info',
  duration: 0,
  closable: true,
  onClose: f => f,
};

export default Alert;
