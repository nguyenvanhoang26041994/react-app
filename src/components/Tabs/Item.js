import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Memo from '../Memo';

require('./Item.scss');

const Item = ({ className, active, ...otherProps }) => {
  return (
    <Memo for={active}>
      <div className={cn('rc-tab', { '--active': active }, className)} {...otherProps} />
    </Memo>
  );
};

Item.displayName = 'Tabs.Item';
Item.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.any,
  iconRight: PropTypes.any,
  title: PropTypes.any,
};
Item.defaultProps = {};

export default Item;
