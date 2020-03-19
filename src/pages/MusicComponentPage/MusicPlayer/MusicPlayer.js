import React from 'react';
import cn from 'classnames';

require('./MusicPlayer.scss');

const MusicPlayer = ({ className }) => {
  return (
    <div className={cn('module-music-player flex items-center px-2 justify-end', className)}>

    </div>
  );
};

export default MusicPlayer;
