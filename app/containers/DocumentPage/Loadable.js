/**
 * Asynchronously loads the component for DocumentPage
 */
import loadable from 'loadable-components';

export default loadable(() => import('./index'));
