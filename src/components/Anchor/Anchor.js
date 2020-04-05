import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Affix from '../Affix';
import Link from './Link';

require('./Anchor.scss');

class Anchor extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeElm: '',
      scrollItems: [],
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.setInitScrollItems();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getElementById(id) {
    return document.getElementById(id);
  }

  setInitScrollItems() {
    const scrollItems = [];

    React.Children.map(this.props.children, elm => {
      return scrollItems.push(this.getElementById(elm.props.href.slice(1)));
    });

    this.setState({ scrollItems });
  }

  handleScroll() {
    const { scrollItems } = this.state;
    const { offset } = this.props;
    const activeElements = scrollItems.filter(item => {
      return item.getBoundingClientRect().top < offset;
    });

    const activeElementId =
      activeElements.length > 0
        ? activeElements[activeElements.length - 1].getAttribute('id')
        : '';

    this.setState({ activeElm: `#${activeElementId}` });
  }

  smoothScrollTo(target) {
    target.preventDefault();

    const { onClick, offset } = this.props;

    const href = target.currentTarget.getAttribute('href');
    const id = href.slice(1);
    const anchor = this.getElementById(id);
    const offsetTop = anchor.getBoundingClientRect().top + window.pageYOffset;

    window.scroll({
      top: offsetTop - offset,
      behavior: 'smooth',
    });

    this.setState({
      activeElm: href,
    });

    if (onClick) {
      onClick(target);
    }
  }

  renderElement() {
    const { children, ...rest } = this.props;

    return (
      <div className="rc-anchor">
        <div className="rc-anchor-border-left">{''}</div>
        {React.Children.map(children, elm => {
          return React.cloneElement(elm, {
            active: elm.props.href === this.state.activeElm,
            handleScrollTo: target => {
              this.smoothScrollTo(target);
            },
            ...rest,
          });
        })}
      </div>
    );
  }

  render() {
    const { hasAffix, offset } = this.props;
    return (
      <>
        {hasAffix ? (
          <Affix top={offset}>{this.renderElement()}</Affix>
        ) : (
          this.renderElement()
        )}
      </>
    );
  }
}

Anchor.Link = Link;

Anchor.displayName = 'Anchor';
Anchor.propTypes = {
  hasAffix: PropTypes.bool,
  offset: PropTypes.number,
  children: PropTypes.any,
  onClick: PropTypes.func
};
Anchor.defaultProps = {
  hasAffix: false,
  offset: 0,
};

export default Anchor;
