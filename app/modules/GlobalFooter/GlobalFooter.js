import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../../components/core';

const GlobalFooter = ({ className }) => (
  <Grid style={{ height: '10rem' }} span="full" className={className} />
);

GlobalFooter.displayName = 'GlobalFooter';
GlobalFooter.propTypes = {
  className: PropTypes.string,
};
GlobalFooter.defaultProps = {};

export default GlobalFooter;
