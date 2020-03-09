import React, { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';

require('./ScrollUp.scss');

const ScrollUp = ({ className }) => {
  const scrollToTop = useCallback(() => window.scrollTo({top: 0, behavior: 'smooth'}), []);

  return (
    <Button className={cn('rc-scroll-up', className)} onClick={scrollToTop}>
      <Icon name="home" />
    </Button>
  );
};

ScrollUp.displayName = 'ScrollUp';
ScrollUp.propTypes = {};
ScrollUp.defaultProps = {};

export default ScrollUp;
