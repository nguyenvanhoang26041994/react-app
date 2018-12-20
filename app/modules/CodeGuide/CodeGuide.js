import React from 'react';
import PropTypes from 'prop-types';

const CodeGuide = ({ code, children, ...otherProps }) => (
  <div {...otherProps}>
    <pre
      style={{ padding: '0.75rem 0', fontFamily: 'monospace', color: 'purple' }}
    >
      {code}
    </pre>
    {children}
  </div>
);

CodeGuide.displayName = 'CodeGuide';
CodeGuide.propTypes = {
  code: PropTypes.string,
  children: PropTypes.node,
};
CodeGuide.defaultProps = {};

export default CodeGuide;
