import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../Loader';

const Box = ({ children, loading, skeleton, className, ...otherProps }) => {
  return (
    <div
      className={cn('rc-box', {
        '--loading': loading,
        '--skeleton': skeleton,
        '--not-skeleton': !skeleton
      })}
    >
      <div className={cn('rc-box-content', className)} {...otherProps}>
        {children}
      </div>
      {loading && (
        <div className="rc-box-loader">
          {skeleton ? skeleton : <Loader.Dot />}
        </div>
      )}
    </div>
  );
};

Box.displayName = 'Box';
Box.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool,
  skeleton: PropTypes.object,
  className: PropTypes.string
};
Box.defaultProps = {};

export default Box;
