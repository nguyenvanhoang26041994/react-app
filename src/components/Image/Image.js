import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback
} from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Skeleton from '../Skeleton';

const Image = ({ className, lazyLoad, w, h, src, clientElement, ...otherProps }) => {
  const ref = useRef();
  const [injectSrc, setInjectSrc] = useState(lazyLoad ? {} : { src });

  const isLoaded = useMemo(() => !!injectSrc.src, [injectSrc.src]);

  const isInViewPort = useCallback(imgRect => {
    const { top, left } = imgRect;

    return (
      top >= 0 &&
      top < (window.innerHeight || clientElement.clientHeight) &&
      left >= 0
    );
  }, []);

  const handleScroll = useCallback(() => {
    const imgRect = ref.current.getBoundingClientRect();
    if (!isLoaded && isInViewPort(imgRect)) {
      setInjectSrc({ src });
    }
  }, [ref]);

  useEffect(() => {
    if (lazyLoad) {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll, lazyLoad]);

  return (
    <div className={cn('rc-image', className)} style={{ width: w, height: h }}>
      {!isLoaded && <Skeleton w={w || '100%'} h={h || '100%'} />}
      <img
        data-src={src}
        className={cn({ '--loaded': isLoaded })}
        ref={ref}
        {...injectSrc}
        {...otherProps}
      />
    </div>
  );
};

Image.displayName = 'Image';
Image.propTypes = {
  className: PropTypes.string,
  lazyLoad: PropTypes.bool,
  w: PropTypes.string,
  h: PropTypes.string,
  src: PropTypes.string,
  clientElement: PropTypes.any,
};
Image.defaultProps = {
  clientElement : document.documentElement,
};

export default Image;
