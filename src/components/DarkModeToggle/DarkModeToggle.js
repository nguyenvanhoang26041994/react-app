import React, { useState, useEffect, useCallback } from 'react';

import ActionButton from '../ActionButton';

require('./DarkModeToggle.scss');

const DarkModeToggle = (props) => {
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
    <ActionButton onClick={handleToogleDarkMode} icon={isDark ? 'sun' : 'moon-stars' } {...props} />
  );
};

DarkModeToggle.displayName = 'DarkModeToggle';
DarkModeToggle.propTypes = {};
DarkModeToggle.defaultProps = {};

export default DarkModeToggle;
