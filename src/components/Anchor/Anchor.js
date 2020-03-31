import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Affix from '../Affix';
import Link from './Link';

const Anchor = ({ className, noAffix, ...otherProps }) => {
  return (
    <Affix {...otherProps}>
      <div>CODE HERE</div>
    </Affix>
  )
};

Anchor.Link = Link;

Anchor.displayName = 'Anchor';
Anchor.propTypes = {};
Anchor.defaultProps = {};

export default Anchor;
