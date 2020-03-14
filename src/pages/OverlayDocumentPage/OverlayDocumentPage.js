import React, { useState } from 'react';
import Confirm from '../../components/Confirm';
import PureConfirm from '../../components/PureConfirm';
import Notification from '../../components/Notification';
import PureNotification from '../../components/PureNotification';
import Drawer from '../../components/Drawer';
import Button from '../../components/Button';
import PureAlert from '../../components/PureAlert';
import PureDrawer from '../../components/PureDrawer';
import Alert from '../../components/Alert';

const OverlayDocumentPage = ({ children }) => {
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);

  return (
    <div id="form-document-page" className="flex mt-20">
      <div className="w-1/4 px-2">
        <Button className="mb-3 mr-3">CONFIRM</Button>
        <Button onClick={() => setConfirmOpen(true)}>Open Confirm</Button>
        <PureConfirm header="Neumorphism Design" className="w-full mb-3">
          Bạn có đồng ý rằng Neumorphism Design sẽ là trend trong năm nay?
        </PureConfirm>
        <Confirm header="Neumorphism Design" open={isConfirmOpen} onClose={() => setConfirmOpen(false)}>
          Bạn có đồng ý rằng Neumorphism Design sẽ là trend trong năm nay?
        </Confirm>
       
        <br />
        <Button className="mb-3 mr-3 mt-20">NOTIFICATION</Button>
        <Button onClick={() => setNotificationOpen(true)}>Open Notification</Button>
        <PureNotification header="Neumorphism Design" className="w-full mb-3">
          Bạn có đồng ý rằng Neumorphism Design sẽ là trend trong năm nay?
        </PureNotification>
        <Notification header="Neumorphism Design" open={isNotificationOpen} onClose={() => setNotificationOpen(false)}>
          Bạn có đồng ý rằng Neumorphism Design sẽ là trend trong năm nay?
        </Notification>
        <br />
        <Button className="mb-3 mr-3 mt-20">ALERT</Button>
        <Button onClick={() => setAlertOpen(true)}>Open Alert</Button>
        <PureAlert className="w-full mb-3">
          Neumorphism Design
        </PureAlert>
        <PureAlert type="success" className="w-full mb-3">
          Neumorphism Design
        </PureAlert>
        <PureAlert type="error" className="w-full mb-3">
          Neumorphism Design
        </PureAlert>
        <PureAlert type="warning" className="w-full mb-3">
          Neumorphism Design
        </PureAlert>
        <Alert open={isAlertOpen} onClose={() => setAlertOpen(false)} className="w-full mb-3">
          Bạn có đồng ý rằng Neumorphism Design sẽ là trend trong năm nay?
        </Alert>
      </div>
      <div className="w-1/4 px-2">
        <Button className="mb-3 mr-3">DRAWER</Button>
        <Button className="mb-3" onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
        <PureDrawer header="Neumorphism Design" className="neumorphism">
          Bạn có đồng ý rằng Neumorphism Design sẽ là trend trong năm nay?
        </PureDrawer>
        <Drawer header="Neumorphism Design" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
          Bạn có đồng ý rằng Neumorphism Design sẽ là trend trong năm nay?
        </Drawer>
      </div>
    </div>
  )
};

export default OverlayDocumentPage;
