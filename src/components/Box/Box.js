import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../Loader';

const Box = ({ children, loading, skeleton, className, ...otherProps }) => {
  const loaderContent = useMemo(() => {
    if (loading) {
      return (
        <div className="rc-box-loader">
          {skeleton ? skeleton : <Loader.Dot className="rc-box-dot" />}
        </div>
      );
    }
    return null;
  }, [loading]);

  return (
    <div className='rc-box'>
      <div
        className={cn(
          'rc-box-content',
          { '--loading': loading, '--hasSkeleton': loading && skeleton },
          className
        )}
        {...otherProps}
      >
        {children}
      </div>
      {loaderContent}
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
