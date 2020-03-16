const root = document.createElement('div');
const rootNotification = document.createElement('div');
const rootAlert = document.createElement('div');

rootNotification.id = 'root-notification';
rootNotification.style.position = 'fixed';
rootNotification.style.top = '0';
rootNotification.style.right = '0';

rootAlert.id = 'root-alert';
rootAlert.style.position = 'fixed';
rootAlert.style.top = '0';
rootAlert.style.left = '0';

root.appendChild(rootNotification);
root.appendChild(rootAlert);

root.id = 'root-portal';

document.body.appendChild(root);

export {
  root,
  rootNotification,
  rootAlert
};
