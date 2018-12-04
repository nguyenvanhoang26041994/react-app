import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Paragraph.scss';

const P = ({ className, ...otherProps }) => (
  <p {...otherProps} className={cn('rc-paragraph', className)} />
);

P.displayName = 'P';
P.propTypes = {
  className: PropTypes.string,
};
P.defaultProps = {};

export default P;
