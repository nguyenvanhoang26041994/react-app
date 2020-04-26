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

const Image = ({ className, lazyLoad, w, h, src, alt, clientElement, ...otherProps }) => {
  const ref = useRef();
  const [injectSrc, setInjectSrc] = useState({ src: '' });

  const isLoaded = useMemo(() => !(injectSrc.src === ''), [injectSrc.src]);

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

  const renderComponent = useMemo(() => {
    if (lazyLoad) {
      return (
        <img
          data-src={src}
          className={cn('rc-image', { '--loaded': isLoaded })}
          ref={ref}
          width={w}
          height={h}
          alt={alt}
          {...injectSrc}
          {...otherProps}
        />
      );
    }

    return (
      <img
        className="rc-image --normal"
        ref={ref}
        src={src}
        width={w}
        height={h}
        alt={alt}
        {...otherProps}
      />
    );
  }, [isLoaded]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className={cn('rc-image-wrapper', className)}>
      {!isLoaded && lazyLoad && <Skeleton w={w || '100%'} h={h || '100%'} />}
      {renderComponent}
    </div>
  );
};

Image.displayName = 'Image';
Image.propTypes = {
  className: PropTypes.string,
  lazyLoad: PropTypes.bool,
  w: PropTypes.number,
  h: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  clientElement: PropTypes.any,
};
Image.defaultProps = {
  clientElement : document.documentElement,
};

export default Image;
