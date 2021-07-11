import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Badge from '../Badge';

const PureBadge = Badge.PureBadge;

const BadgeAvatar = ({ className, badge, ...otherProps }) => {
  return (
    <PureBadge
      className={cn('fnotice-badge-avatar', className)}
      badge={(
        <div className="fbadge-ui">
          {badge}
        </div>
      )}
      {...otherProps}
    />
  );
};

BadgeAvatar.displayName = 'NoticeNotification.BadgeAvatar';
BadgeAvatar.propTypes = {
  className: PropTypes.string,
};
BadgeAvatar.defaultProps = {
  placement: 'bottom-end',
  overlap: true,
};

export default BadgeAvatar;
