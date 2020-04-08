import React, { useMemo, useEffect, useRef, useCallback, useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Handler from './Handler';

import useUncontrolled from '../../hooks/useUncontrolled';

const Slider = ({ className, defaultValue, min, max, onChange, ...otherProps }) => {
  const handlerRef = useRef();
  const ref = useRef();
  const railRef = useRef();

  const [value, setValue] = useUncontrolled('value', otherProps, {
    defaultState: defaultValue,
    onChangeState: onChange,
  });

  const percent = useMemo(() => value / max, [value, max]);

  useEffect(() => {
    let isDraging = false;
    const calcValue = (pageX) => {
      const { x, width } = ref.current.getBoundingClientRect();
      if (pageX - x >= width) {
        return max;
      }

      if (pageX - x < 0) {
        return 0;
      }

      return Math.ceil(((pageX - x) / width) * max);
    };

    const onDraging = (e) => {
      isDraging = true;
    };
    const offDraging = (e) => {
      isDraging = false;
    };
    const draging = (e) => {
      if (!isDraging) {
        return;
      }
      return setValue(calcValue(e.pageX));
    };

    const clickHandler = (e) => setValue(calcValue(e.pageX));
  
    handlerRef.current.addEventListener('mousedown', onDraging);
    handlerRef.current.addEventListener('mouseup', offDraging);
    ref.current.addEventListener('mousemove', draging);
    ref.current.addEventListener('mouseup', offDraging);
    ref.current.addEventListener('mouseleave', offDraging);
    ref.current.addEventListener('click', clickHandler);

    return () => {
      handlerRef.current.removeEventListener('mousedown', onDraging);
      handlerRef.current.removeEventListener('mouseup', offDraging);
      ref.current.removeEventListener('mousemove', draging);
      ref.current.removeEventListener('mouseup', offDraging);
      ref.current.removeEventListener('mouseleave', offDraging);
      ref.current.removeEventListener('click', clickHandler);
    }
  } ,[max]);

  return (
    <div
      ref={ref}
      className={cn('rc-slider', className)}
      {...otherProps}
    >
      <did className="rc-slider-rail" ref={railRef}>
        <div
          className="rc-slider-rail-percent"
          style={{
            width: `${percent * 100}%`
          }}
        >
          <Handler ref={handlerRef} />
        </div>
      </did>
    </div>
  );
};

Slider.displayName = 'Slider';
Slider.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  defaultValue: PropTypes.number,
  value: PropTypes.number,
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  defaultValue: 0,
  onChange: f => f,
};

export default Slider;
