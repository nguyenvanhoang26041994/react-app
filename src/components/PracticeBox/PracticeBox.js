import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./PracticeBox.scss');

const PracticeBox = ({ wrapperClassName, className, header, note, children, ...otherProps }) => {
  return (
    <div className={cn('flex flex-col p-2', wrapperClassName)} {...otherProps}>
      <div className="flex items-center justify-between">
        <span>{header && <h2 className="mb-3">{header}</h2>}</span>
        {note && <div className="mb-3 text-sm">{note}</div>}
      </div>
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

PracticeBox.displayName = 'PracticeBox';
PracticeBox.propTypes = {
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  header: PropTypes.any,
  note: PropTypes.any,
  children: PropTypes.any,
};
PracticeBox.defaultProps = {};

export default PracticeBox;
