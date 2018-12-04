import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Tag.scss';

const colors = Object.freeze({
  primary: 'rc-tag--primary',
  success: 'rc-tag--success',
  warning: 'rc-tag--warning',
  error: 'rc-tag--error',
});

export default class Tag extends React.Component {
  isHasVisible = 'visible' in this.props;

  state = {
    visible: this.isHasVisible ? this.props.visible : true,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      this.setState({ visible: nextProps.visible });
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    const { color, children, closable, className } = this.props;

    return (
      <div className={cn('rc-tag', colors[color], className)}>
        <span className="rc-tag__content">{children}</span>
        {closable && <span className="rc-tag__close-icon">×</span>}
      </div>
    );
  }
}

Tag.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  closable: PropTypes.bool,
};
Tag.defaultProps = {};
