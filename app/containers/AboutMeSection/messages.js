/*
 * AboutMeSection Messages
 *
 * This contains all the text for the AboutMeSection container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AboutMeSection';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'About Me',
  },
  subTitle : {
    id: `${scope}.subTitle`,
    defaultMessage: 'How I am?',
  }
});
