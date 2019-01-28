/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  textLeft: {
    id: `${scope}.textLeft`,
    defaultMessage: 'Main Left container!',
  },
  textRight: {
    id: `${scope}.textRight`,
    defaultMessage: 'Main Right container!',
  },
});
