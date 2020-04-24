import React, {
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useState
} from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const LazyImage = ({
  className,
  placeHolder,
  width,
  height,
  src,
  alt,
  ...otherProps
}) => {
  const imgRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  const _width = useMemo(() => width || '100%', [width]);
  const _height = useMemo(() => height || '100%', [height]);
  const _placeHolder = useMemo(() => placeHolder || '', [placeHolder]);

  const isInViewPort = useCallback(imgRect => {
    const { top, left } = imgRect;

    return (
      top >= 0 &&
      left >= 0 &&
      top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }, []);

  const handleScroll = useCallback(() => {
    const imgRect = imgRef.current.getBoundingClientRect();
    if (!isLoaded && isInViewPort(imgRect)) {
      imgRef.current.setAttribute('src', src);

      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <img
      className={cn('rc-lazy-image', { '--loaded': isLoaded }, className)}
      ref={imgRef}
      src={_placeHolder}
      width={_width}
      height={_height}
      alt={alt}
      {...otherProps}
    />
  );
};

LazyImage.displayName = 'LazyImage';
LazyImage.propTypes = {
  placeHolder: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
LazyImage.defaultProps = {};

export default LazyImage;

