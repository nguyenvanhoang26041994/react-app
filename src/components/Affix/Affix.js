import React, {
  useState,
  useMemo,
  useRef,
  useLayoutEffect,
  useCallback,
  useEffect
} from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import getLatestProp from '../../utils/getLatestProp';

const mDirections = Object.freeze({
  top: 'top',
  bottom: 'bottom',
});

const Affix = ({ children, className, ...otherProps }) => {
  const [sticky, setSticky] = useState(false);
  const [boxModel, setBoxModel] = useState({});

  const placeHolderRef = useRef();
  const affixRef = useRef();

  const direction = useMemo(
    () => mDirections[getLatestProp(otherProps, ['top', 'bottom'])],
    [otherProps.top, otherProps.bottom]
  );

  const makeSticky = useCallback(() => {
    if (!direction) {
      return null;
    }

    const {
      top: placeHolderTop,
      bottom: placeHolderBottom,
    } = placeHolderRef.current.getBoundingClientRect();

    if (direction === 'top') {
      if (placeHolderTop < otherProps.top) {
        return setSticky(true);
      }
      return setSticky(false);
    }

    if (direction === 'bottom') {
      if (placeHolderBottom > window.innerHeight - otherProps.bottom) {
        return setSticky(true);
      }
      return setSticky(false);
    }
  }, [direction, otherProps[direction]]);

  useEffect(() => {
    setBoxModel({
      clientHeight: affixRef.current.clientHeight,
      clientWidth: affixRef.current.clientWidth,
    });
  }, []);

  useLayoutEffect(() => {
    makeSticky();

    const handler = () => makeSticky();
    window.addEventListener('scroll', handler);

    return () => window.removeEventListener('scroll', handler);
  }, [makeSticky]);

  const stickyPlaceholderStyle = {
    width: boxModel.clientWidth,
    height: boxModel.clientHeight,
  };

  const stickyStyle = useMemo(() => {
    return {
      position: 'fixed',
      [direction]: otherProps[direction],
      width: boxModel.clientWidth,
      height: boxModel.clientHeight,
    };
  }, [
    sticky,
    direction,
    otherProps[direction],
    boxModel.clientWidth,
    boxModel.clientHeight,
  ]);

  return (
    <div className="rc-affix-container">
      <div style={sticky ? stickyPlaceholderStyle : {}} ref={placeHolderRef} />
      <div
        ref={affixRef}
        className={cn({ 'rc-affix': sticky })}
        style={sticky ? stickyStyle : {}}
      >
        {children}
      </div>
    </div>
  );
};

Affix.displayName = 'Affix';
Affix.propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number,
  children: PropTypes.object,
  className: PropTypes.string,
};
Affix.defaultProps = {};

export default Affix;
