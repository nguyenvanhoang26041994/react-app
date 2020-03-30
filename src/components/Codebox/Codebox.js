import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { Icon, Divider } from '../core';

require('./Codebox.scss');

const Codebox = ({ children, header, defaultExpanded, href, code, className }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const toggleExpanded = useCallback(() => setExpanded(prev => !prev), []);

  return (
    <div className={cn('code-box', className)} id={href}>
      <h2 className="code-box-header">{header}</h2>
      <div className="code-box-demo">
        {children}
      </div>
      <div className={cn('code-box-guide', { '--expanded': expanded, '--hidden': !code })}>
        <Divider
          dashed
          right
          title={(
            <span onClick={toggleExpanded} className="code-box-collapse-code-header">
              <Icon name="caret-down" /> Code
            </span>
          )}
        />
        <pre className="code-box-code">
          {code}
        </pre>
      </div>
    </div>
  );
};

export default Codebox;
