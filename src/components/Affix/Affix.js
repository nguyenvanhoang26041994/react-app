import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Affix extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      top: null,
      left: null,
      height: null,
      width: null,
      bottom: null
    };

    this.fixedNode = React.createRef();
    this.placeHolderNode = React.createRef();

    this.events = [
      'resize',
      'scroll',
      'touchstart',
      'touchmove',
      'touchend',
      'pageshow',
      'load'
    ];
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.getInitPosition();
    this.events.forEach(event =>
      window.addEventListener(event, this.handleScroll)
    );
  }

  componentWillUnmount() {
    this.events.forEach(event =>
      window.removeEventListener(event, this.handleScroll)
    );
  }

  getElmRect(elm) {
    return elm.getBoundingClientRect();
  }

  getInitPosition() {
    const { top, left, bottom, height, width } = this.getElmRect(this.fixedNode.current);

    this.setState({
      top,
      left,
      height,
      width,
      bottom: window.innerHeight - bottom
    });
  }

  handleScroll() {
    const { top, left, bottom } = this.getElmRect(this.placeHolderNode.current);

    this.setState({
      top,
      left,
      bottom: window.innerHeight - bottom
    });
  }

  calculate() {
    let affixStyle = {};
    let placeHolderStyle = {};
    const { offsetTop, offsetBottom } = this.props;
    const {
      top,
      left,
      height,
      width,
      bottom,
  } = this.state;

    if (offsetTop !== undefined && top && top < offsetTop) {
      affixStyle = {
        left,
        height,
        width,
        position: 'fixed',
        zIndex: 10,
        top: offsetTop
      };
      placeHolderStyle = {
        height,
        width
      };
    } else if (offsetBottom !== undefined && bottom && bottom < offsetBottom) {
      affixStyle = {
        left,
        height,
        width,
        position: 'fixed',
        zIndex: 10,
        bottom: offsetBottom
      };
      placeHolderStyle = {
        height,
        width,
      };
    }

    return { affixStyle, placeHolderStyle };
  }

  render() {
    const { children } = this.props;
    const { affixStyle, placeHolderStyle } = this.calculate();

    return (
      <div>
        <div ref={this.placeHolderNode} style={placeHolderStyle}></div>
        <div ref={this.fixedNode} style={affixStyle}>
          {children}
        </div>
      </div>
    );
  }
}

Affix.defaultProps = {
  offsetTop: undefined,
  offsetBottom: undefined
};

Affix.propTypes = {
  children: PropTypes.object,
  offsetTop: PropTypes.number,
  offsetBottom: PropTypes.number
};
