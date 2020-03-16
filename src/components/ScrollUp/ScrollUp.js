import React, { useCallback } from 'react';

import ActionButton from '../ActionButton';

require('./ScrollUp.scss');

const ScrollUp = () => {
  const scrollToTop = useCallback(() => window.scrollTo({top: 0, behavior: 'smooth'}), []);

  return (
    <ActionButton className="rc-scroll-up" onClick={scrollToTop} icon="home" />
  );
};

ScrollUp.displayName = 'ScrollUp';
ScrollUp.propTypes = {};
ScrollUp.defaultProps = {};

export default ScrollUp;
