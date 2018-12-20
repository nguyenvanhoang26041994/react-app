import React from 'react';
import PropTypes from 'prop-types';

const CodeDemo = ({ code, children, ...otherProps }) => (
  <div {...otherProps}>
    <pre style={{ padding: '0.75rem 0', fontFamily: 'monospace' }}>{code}</pre>
    {children}
  </div>
);

CodeDemo.displayName = 'CodeDemo';
CodeDemo.propTypes = {
  code: PropTypes.string,
  children: PropTypes.node,
};
CodeDemo.defaultProps = {};

export default CodeDemo;
