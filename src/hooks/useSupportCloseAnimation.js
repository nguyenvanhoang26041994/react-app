import React from 'react';
import useDebounce from './useDebounce';


export default (value, delay = 100) => {
  const debouncedValue = useDebounce(value, delay);

  return debouncedValue;
}
