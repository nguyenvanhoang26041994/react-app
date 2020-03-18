import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';

require('./Carousel.scss');

const Carousel = ({ className, children }) => {
  const [page, setPage] = useState(1);
  const [body, setBody] = useState({ height: 0, width: 0 });
  const [boxBody, setBoxBody] = useState({ height: 0, width: 0 });

  const maxPage = useMemo(() => Math.ceil(boxBody.width / body.width), [body.width, boxBody.width]);

  const ref = useRef();
  const boxRef = useRef();

  useEffect(() => {
    setBoxBody({
      height: boxRef.current.clientHeight,
      width: boxRef.current.clientWidth,
    });
    setBody({
      width: ref.current.clientWidth,
    });
  }, []);

  const handleNext = useCallback(() => setPage(prev => {
    const _page = prev + 1;
    return _page > maxPage ? maxPage : _page;
  }), []);
  const handlePrev = useCallback(() => setPage(prev => {
    const _page = prev - 1;
    return _page < 1 ? 1 : _page;
  }), []);

  return (
    <div
      ref={ref}
      className={cn('rc-carousel', className)}
      style={{ height: boxBody.height }}
    >
      <div
        ref={boxRef}
        className="rc-carousel-box"
        style={{
          left: -(page - 1) * body.width,
        }}
      >
        {children}
      </div>
      <Button className={cn('rc-carousel-prev', { '--hidden': page <= 1 })} circle transparent onClick={handlePrev}>
        <Icon name="chevron-left" />
      </Button>
      <Button className={cn('rc-carousel-next', { '--hidden': page >= maxPage })} circle transparent onClick={handleNext}>
        <Icon name="chevron-right" />
      </Button>
    </div>
  );
};

Carousel.displayName = 'Carousel';
Carousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
Carousel.defaultProps = {};

export default Carousel;
