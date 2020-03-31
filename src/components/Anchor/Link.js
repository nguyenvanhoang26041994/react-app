import React from 'react';

require('./Link.scss');

const Link = ({ href, ...otherProps }) => <div {...otherProps} />;

Link.displayName = 'Anchor.Link';

export default Link;
