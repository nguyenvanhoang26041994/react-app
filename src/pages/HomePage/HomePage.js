import React from 'react';

import Button from '../../components/Button';
import Textbox from '../../components/Textbox';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Icon from '../../components/Icon';
import Pagination from '../../components/Pagination';
import Checkbox from '../../components/Checkbox';
import Switch from '../../components/Switch';
import Radio from '../../components/Radio';
import Progress from '../../components/Progress';
import PureConfirm from '../../components/PureConfirm';
import PureDrawer from '../../components/PureDrawer'
import DarkModeToggle from '../../components/DarkModeToggle';
import ScrollUp from '../../components/ScrollUp';
import PureNotification from '../../components/PureNotification';
import PureAlert from '../../components/PureAlert';
import Rating from '../../components/Rating';
import Slider from '../../components/Slider';
import Portal from '../../components/Portal';
import Confirm from '../../components/Confirm';
import Notification from '../../components/Notification';
import Alert from '../../components/Alert';
import Drawer from '../../components/Drawer';

export default () => {

  return (
    <div className="flex mt-10">
      <div className="w-1/3"></div>
      <div className="w-1/3 flex flex-wrap">
        <div className="mr-5 neumorphism" style={{ height: '7em', width: '7em', borderRadius: '100em' }}></div>
        <div className="mr-5 neumorphism" style={{ height: '7em', width: '12em', borderRadius: '100em' }}></div>
        <div className="neumorphism" style={{ height: '7em', width: '15em', borderRadius: '100em' }}></div>
      </div>
    </div>
  );
};
