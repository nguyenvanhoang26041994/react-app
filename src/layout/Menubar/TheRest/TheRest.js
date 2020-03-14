import React from 'react';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import Avatar from '../../../components/Avatar';
import DarkModeToggle from '../../../components/DarkModeToggle';
import ActionButton from '../../../components/ActionButton';

require('./TheRest.scss');

const TheRest = ({ className, avatarUrl, name }) => {
  const { push } = useHistory();
  return (
    <div className={cn('rc-menubar-the-rest neumorphism', className)}>
      <ActionButton className="mr-3" icon="home" onClick={() => push('/')} />
      <ActionButton className="mr-3" icon="keyboard" onClick={() => push('/document/form')} />
      <ActionButton className="mr-3" icon="mouse" onClick={() => push('/document/common')} />
      <ActionButton className="mr-3" icon="heart" onClick={() => push('/document/overlay')} />
      <ActionButton icon="desktop" onClick={() => push('/document/display')} />
    </div>
  );
};

export default TheRest;
