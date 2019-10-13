/**
 *
 * Asynchronously loads the component for LatestPostItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
