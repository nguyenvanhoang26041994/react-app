import React, { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ActionButton from '../ActionButton';

require('./ScrollUp.scss');

const ScrollUp = ({ className }) => {
  const scrollToTop = useCallback(() => window.scrollTo({top: 0, behavior: 'smooth'}), []);

  return (
    <ActionButton className="rc-scroll-up" onClick={scrollToTop} icon="home" />
  );
};

ScrollUp.displayName = 'ScrollUp';
ScrollUp.propTypes = {};
ScrollUp.defaultProps = {};

export default ScrollUp;
