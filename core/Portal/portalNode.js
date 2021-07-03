const root = document.createElement('div');
const rootNotification = document.createElement('div');
const rootAlert = document.createElement('div');

root.id = 'root-portal';
rootNotification.id = 'root-notification';
rootAlert.id = 'root-alert';

root.appendChild(rootNotification);
root.appendChild(rootAlert);

document.body.appendChild(root);

export {
  root,
  rootNotification,
  rootAlert
};
