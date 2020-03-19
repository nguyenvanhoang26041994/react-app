import React from 'react';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import Button from '../../../components/Button';

require('./TheRest.scss');

const TheRest = ({ className, avatarUrl, name }) => {
  const { push } = useHistory();
  return (
    <div className={cn('rc-menubar-the-rest neumorphism', className)}>
      <Button style={{ fontSize: '1.25em' }} circle className="mr-3" icon="home" onClick={() => push('/')} />
      <Button style={{ fontSize: '1.25em' }} circle className="mr-3" icon="comment-alt-music" onClick={() => push('/lap-music-components')} />
      <Button style={{ fontSize: '1.25em' }} circle className="mr-3" icon="heart" onClick={() => push('/hoang-lap')} />
    </div>
  );
};

export default TheRest;
