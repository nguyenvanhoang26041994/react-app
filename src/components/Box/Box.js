import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../Loader';

const Box = ({ className, children, loading, skeleton, ...otherProps }) => {
  return (
    <div
      className={cn(
        'rc-box',
        {
          '--loading': loading,
          '--skeleton': skeleton,
          '--dots': !skeleton
        },
        className
      )}
    >
      <div className='rc-box-content' {...otherProps}>
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
  children: PropTypes.any,
  loading: PropTypes.bool,
  skeleton: PropTypes.any,
  className: PropTypes.string
};
Box.defaultProps = {};

export default Box;
