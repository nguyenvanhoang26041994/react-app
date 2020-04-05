import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

require('./Link.scss');

const Link = ({ title, handleScrollTo, active, ...otherProps }) => {
  return (
    <div className="rc-anchor-link">
      <a
        className={cn('rc-anchor-title', {
          '--active': active
        })}
        {...otherProps}
        onClick={handleScrollTo}
      >
        {title}
      </a>
    </div>
  );
};

Link.displayName = 'Anchor.Link';

Link.propTypes = {
  title: PropTypes.string,
  handleScrollTo: PropTypes.func,
  active: PropTypes.bool
};

export default Link;
