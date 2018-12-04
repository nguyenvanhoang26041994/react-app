import { canUseDOM } from '../utils';

/**
 * Remove Alert from DOM
 */
export default () => {
  if (!canUseDOM) {
    return false;
  }

  document.querySelectorAll('.rc-alert-anywhere').forEach(alertAnyWhereNode => {
    while (alertAnyWhereNode.firstChild) {
      alertAnyWhereNode.removeChild(alertAnyWhereNode.firstChild);
    }
  });

  document
    .querySelectorAll('.flag__rc-alert-anywhere')
    .forEach(elm => document.body.removeChild(elm));

  return true;
};
