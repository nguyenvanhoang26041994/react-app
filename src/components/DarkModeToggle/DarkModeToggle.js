import React, { useState, useEffect, useCallback } from 'react';

import Switch from '../Switch';

require('./DarkModeToggle.scss');

const DarkModeToggle = (props) => {
  const [isDark, setIsDark] = useState();

  const onChange = useCallback(e => setIsDark(e.target.checked), []);

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
    <div style={{ display: 'flex', alignItems: 'center' }} {...props}>
      <Switch
        checked={isDark}
        onChange={onChange}
      />
    </div>
  );
};

DarkModeToggle.displayName = 'DarkModeToggle';
DarkModeToggle.propTypes = {};
DarkModeToggle.defaultProps = {};

export default DarkModeToggle;
