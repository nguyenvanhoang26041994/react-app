import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { omit } from 'lodash/fp';

import Sticker from '../Sticker';
import Icon from '../Icon';
import Button from '../Button';

import './style/Popconfirm.scss';
// import '../style/utilities/flexbox/index.scss';
// import '../style/utilities/spacing.css';

const placements = Object.freeze({
  top: 'rc-popconfirm--top',
  bottom: 'rc-popconfirm--bottom',
  left: 'rc-popconfirm--left',
  right: 'rc-popconfirm--right',
  'top-left': 'rc-popconfirm--top-left',
  'left-top': 'rc-popconfirm--left-top',
  'top-right': 'rc-popconfirm--top-right',
  'right-top': 'rc-popconfirm--right-top',
  'bottom-left': 'rc-popconfirm--bottom-left',
  'left-bottom': 'rc-popconfirm--left-bottom',
  'bottom-right': 'rc-popconfirm--bottom-right',
  'right-bottom': 'rc-popconfirm--right-bottom',
});

export default class Popconfirm extends React.Component {
  state = { visible: false };

  popconfirmRef = React.createRef();

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
      this.popconfirmRef.current &&
      this.popconfirmRef.current.contains(event.target)
    ) {
      return false;
    }

    return this.setState({ visible: false });
  };

  onOK = () => this.setState({ visible: false }, this.props.onOK);

  onCancel = () => this.setState({ visible: false }, this.props.onCancel);

  onChangeVisible = e => this.setState({ visible: e.target.value });

  render() {
    const {
      className,
      children,
      title,
      cancelText,
      okText,
      propsCancel,
      propsOK,
      placement,
    } = this.props;

    const cnOK = propsOK.className;
    const otherPropsOK = omit('className')(propsOK);

    return (
      <Sticker
        visible={this.state.visible}
        onChangeVisible={this.onChangeVisible}
        placement={placement}
        overlay={
          <div
            ref={this.popconfirmRef}
            className={cn('rc-popconfirm', placements[placement], className)}
          >
            <div className="rc-popconfirm__message">
              <Icon className="rc-popconfirm__message__icon" icon="question" />
              {title}
            </div>
            <div className="flex justify-end items-center">
              <Button size="small" onClick={this.onCancel} {...propsCancel}>
                {cancelText}
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={this.onOK}
                className={cn('ml-2', cnOK)}
                {...otherPropsOK}
              >
                {okText}
              </Button>
            </div>
          </div>
        }
        trigger="click"
      >
        {children}
      </Sticker>
    );
  }
}

Popconfirm.displayName = 'Popconfirm';
Popconfirm.propTypes = {
  placement: PropTypes.oneOf(Object.keys(placements)),
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  cancelText: PropTypes.node,
  okText: PropTypes.node,
  onOK: PropTypes.func,
  propsCancel: PropTypes.object,
  propsOK: PropTypes.object,
  onCancel: PropTypes.func,
};
Popconfirm.defaultProps = {
  placement: 'top',
  cancelText: 'Cancel',
  okText: 'OK',
  propsCancel: {},
  propsOK: {},
  onOK: () => true,
  onCancel: () => true,
};
