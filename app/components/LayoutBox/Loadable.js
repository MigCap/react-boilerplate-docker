/**
 *
 * Asynchronously loads the component for LayoutBox
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
