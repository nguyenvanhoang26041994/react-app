import React, { useEffect, useState, useRef } from 'react'
import getPosition from '../../utils/getPosition';
require('./Blur.scss');

const Blur = ({ tracking }) => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const position = getPosition(ref.current.parentNode);
    setTop(-position.pageY);
    setLeft(-position.pageX);
  });
  return (
    <div ref={ref} className="rc-blur" style={{ top, left }} />
  )
};

Blur.defaultProps = {
  tracking: [],
}

export default Blur;
