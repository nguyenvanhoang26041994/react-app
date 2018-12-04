import PureModal from './PureModal';
import Modal from './Modal';

import anywhere from './Modal.anywhere';

Modal.Pure = PureModal;

Modal.confirm = anywhere('confirm');
Modal.success = anywhere('success');
Modal.warning = anywhere('warning');
Modal.error = anywhere('error');
Modal.info = anywhere('info');
Modal.delete = anywhere('delete');

export default Modal;
export { PureModal };
