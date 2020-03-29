import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Affix extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      stickyStyle: null,
      height: 0,
      width: 0,
      containerWidth: 0,
      containerHeight: 0
    };

    this.fixedNode = React.createRef();
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

  getDOMContainer() {
    const container = this.props.container;
    if (container !== document.body) {
      return ReactDOM.findDOMNode(container);
    }
    return container;
  }

  getInitPosition() {
    const thisElm = this.fixedNode.current;
    const container = this.getDOMContainer();

    const thisElmRect = thisElm.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const { top, left, height, width } = thisElmRect;

    this.setState({
      top,
      left,
      height,
      width,
      marginTop: top - containerRect.top,
      marginLeft: left - containerRect.left
    });
  }

  handleScroll() {
    const container = this.getDOMContainer();
    const containerRect = container.getBoundingClientRect();

    const { top, left } = containerRect;
    const { marginTop, marginLeft } = this.state;

    this.setState({
      top: top + marginTop,
      left: left + marginLeft
    });
  }

  calculate() {
    let affixStyle = {};
    const { offsetTop } = this.props;
    const { top, left, height, width } = this.state;

    if (top < offsetTop) {
      affixStyle = {
        left,
        height,
        width,
        position: 'fixed',
        zIndex: 10,
        top: offsetTop
      };
    }
    return { affixStyle };
  }

  render() {
    const { children } = this.props;
    const { affixStyle } = this.calculate();
    return (
      <div ref={this.fixedNode} style={affixStyle}>
        {children}
      </div>
    );
  }
}

Affix.defaultProps = {
  offsetTop: 0,
  container: document.body
};

Affix.propTypes = {
  children: PropTypes.object,
  offsetTop: PropTypes.number,
  container: PropTypes.object
};
