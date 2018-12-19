import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { Grid } from '../../components/core';

const GlobalFooter = ({ className }) => (
  <Grid span="full" className={cn('global-footer', className)} />
);

GlobalFooter.displayName = 'GlobalFooter';
GlobalFooter.propTypes = {
  className: PropTypes.string,
};
GlobalFooter.defaultProps = {};

export default GlobalFooter;
