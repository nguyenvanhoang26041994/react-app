import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Textbox from '../Textbox';
import Search from '../../icons/Search';
import X from '../../icons/X';

const Searchbox = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <div className={cn('fsearchbox', className)}>
      <Search className="fsearchbox-search-icon" />
      <Textbox className="fsearchbox-textbox" spellCheck={false} {...otherProps} ref={ref} />
      <div className="fsearchbox-x-icon">
        <X />
      </div>
    </div>
  )
});

export default Searchbox;
