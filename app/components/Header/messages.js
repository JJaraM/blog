/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  post: {
    id: `${scope}.post`,
  },
  post_create: {
    id: `${scope}.post_create`,
  },
  cases_of_study: {
    id: `${scope}.cases_of_study`,
  },
  cases_of_study_cloud_services: {
    id: `${scope}.cases_of_study_cloud_services`,
  }
});
