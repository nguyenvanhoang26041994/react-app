import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Overlay from '../Overlay';
import ChevronDown from '../../icons/ChevronDown';
import useMeasure from '../../hooks/useMeasure';

const offset = [0, 5];
const Select = React.forwardRef(({ className }, propRef) => {
  const { ref, bounds } = useMeasure();
  useEffect(() => {
    if (propRef) {
      propRef.current = ref.current;
    }
  }, [propRef]);

  return (
    <Overlay
      className="fselect-overlay"
      role="fselect"
      placement="bottom-start"
      trigger="click"
      hideOnClick
      arrow={false}
      maxWidth="none"
      offset={offset}
      content={(
        <div className="fselect-overlay-content" style={{ minWidth: bounds.width }}>
          Hello world
        </div>
      )}
    >
      <button className="fselect fbtn" ref={ref}>
        <span>OK</span>
        <ChevronDown />
      </button>
    </Overlay>
  );
});

export default Select;
