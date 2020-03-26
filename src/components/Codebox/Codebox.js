import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../core';

require('./Codebox.scss');

const Codebox = ({ children, header, href, code, className }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = useCallback(() => setExpanded(prev => !prev), []);

  return (
    <div className={cn('code-box', className)} id={href}>
      <h2 className="code-box-header">{header}</h2>
      <div className="code-box-demo">
        {children}
      </div>
      <div className={cn('code-box-guide', { '--expanded': expanded, '--hidden': !code })}>
        <div className="code-box-collapse-code-header" onClick={toggleExpanded}>
          <span className="mr-2">Code</span>
          <Icon name="caret-down" />
        </div>
        <pre className="code-box-code">
          {code}
        </pre>
      </div>
    </div>
  );
};

export default Codebox;
