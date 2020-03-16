import React from 'react';
import ReactDOM from 'react-dom';
import { Workbox } from 'workbox-window';
import App from './App';
import pushNotification from './components/Notification/push';

ReactDOM.render(<App />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');

  wb.register();
}
