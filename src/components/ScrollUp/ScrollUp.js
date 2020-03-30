import React, { useCallback } from 'react';

import Button from '../Button';

require('./ScrollUp.scss');

const ScrollUp = () => {
  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth'}), []);

  return (
    <Button
      circle
      className="rc-scroll-up"
      onClick={scrollToTop}
      icon="home"
    />
  );
};

ScrollUp.displayName = 'ScrollUp';
ScrollUp.propTypes = {};
ScrollUp.defaultProps = {};

export default ScrollUp;
