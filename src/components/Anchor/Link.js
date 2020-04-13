import React, { useCallback, useLayoutEffect, useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import getPosition from '../../utils/getPosition';

const Link = ({
  className,
  active,
  _onTriggered,
  _key,
  _top,
  _affix,
  title,
  ...otherProps
}) => {
  const ref = useRef();

  const onScroll = useCallback(() => {
    const { top } = ref.current.getBoundingClientRect();
    const target = document.querySelector(_key) || {
      getBoundingClientRect: f => f
    };

    const { top: topTarget } = target.getBoundingClientRect();

    if (top >= topTarget) {
      _onTriggered(_key);
    }
  }, [_key, ref, _onTriggered]);

  const scrollToTarget = useCallback(() => {
    const target = document.querySelector(_key);
    if (!target) {
      return;
    }

    const { pageY } = getPosition(target);
    const currentRef = ref.current;

    const { top: topAnchorLink } = currentRef.getBoundingClientRect();
    const {
      top: topAnchor
    } = currentRef.parentElement.getBoundingClientRect();

    if (!_affix) {
      return window.scrollTo({
        top: pageY,
        behavior: 'smooth'
      });
    }

    if (topAnchor > _top) {
      return window.scrollTo({
        top: pageY - _top - (topAnchorLink - topAnchor),
        behavior: 'smooth'
      });
    }

    return window.scrollTo({
      top: pageY - topAnchorLink,
      behavior: 'smooth'
    });
  }, [_key, _top, _affix, ref]);

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <li
      className={cn('rc-anchor-link', { '--active': active }, className)}
      ref={ref}
      {...otherProps}
    >
      <a onClick={scrollToTarget}>{title}</a>
    </li>
  );
};

Link.displayName = 'Link';
Link.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  _onTriggered: PropTypes.func,
  _key: PropTypes.string,
  _top: PropTypes.number,
  _affix: PropTypes.bool,
  title: PropTypes.string
};
Link.defaultProps = {};

export default Link;
