import React from 'react';
import Portal from '../Portal';

const Pin = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <Portal>
        <div className="hello"></div>
      </Portal>
    </React.Fragment>
  );
}

export default Pin;
