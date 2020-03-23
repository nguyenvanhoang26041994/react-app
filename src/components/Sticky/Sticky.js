import React, { useEffect, useRef, useState } from "react";
import cn from 'classnames';
import PropTypes from "prop-types";

require("./Sticky.scss");

const Sticky = ({ offsetTop, children }) => {
  const [defaultOffsetTop, setDefaultOffsetTop] = useState(20);
  const [isStick, setIsStick] = useState(false);
  const stickyRef = useRef(null);

  const handleScroll = () => {
    setIsStick(stickyRef.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    if (offsetTop) {
      setDefaultOffsetTop(offsetTop);
    }
  }, [offsetTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={stickyRef}
      className={cn('rc-sticky-wrapper', { 'rc-sticky': isStick })}
    >
      <div style={{ top: defaultOffsetTop }} className="rc-sticky-inner">
        {children}
      </div>
    </div>
  );
};

Sticky.propTypes = {
  offsetTop: PropTypes.number,
  children: PropTypes.any
};

export default Sticky;
