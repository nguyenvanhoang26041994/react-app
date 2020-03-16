import React from 'react';

require('./DatePicker.scss');

const DatePicker = () => {
  return (
    <div className='dp-wrapper'>
      <div className='dp-input' style={{ margin: '0 auto' }}>
        <input type='date'/>
      </div>
    </div>
  );
};

export default DatePicker;
