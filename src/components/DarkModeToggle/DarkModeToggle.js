import React, { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';

require('./DarkModeToggle.scss');

const DarkModeToggle = ({ className }) => {
  const [isDark, setIsDark] = useState();

  const handleToogleDarkMode = useCallback(() => setIsDark(prev => !prev));

  useEffect(() => {
    setIsDark(document.body.classList.contains('dark-mode'));
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <Button circle className={cn('rc-dark-mode-button', className)} onClick={handleToogleDarkMode}>
      <Icon name={isDark ? 'sun' : 'moon-stars' } />
    </Button>
  );
};

DarkModeToggle.displayName = 'DarkModeToggle';
DarkModeToggle.propTypes = {};
DarkModeToggle.defaultProps = {};

export default DarkModeToggle;
