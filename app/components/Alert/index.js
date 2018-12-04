import Alert from './Alert';
import anywhere from './Alert.anywhere';
import clean from './clean';

Alert.success = anywhere('success');
Alert.info = anywhere('info');
Alert.warning = anywhere('warning');
Alert.error = anywhere('error');

Alert.clean = clean;
window.Alert = Alert;
export default Alert;
