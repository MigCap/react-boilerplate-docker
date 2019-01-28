/**
 *
 * Asynchronously loads the component for H1
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
