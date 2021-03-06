/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'HEADER',
  },
  main: {
    id: `${scope}.main`,
    defaultMessage: 'MAIN SECTION',
  },
  columnLeft: {
    id: `${scope}.columnLeft`,
    defaultMessage: 'CONTENT LEFT',
  },
  columnCenter: {
    id: `${scope}.columnCenter`,
    defaultMessage: 'CONTENT CENTER',
  },
  columnRight: {
    id: `${scope}.columnRight`,
    defaultMessage: 'CONTENT RIGHT',
  },
  footer: {
    id: `${scope}.footer`,
    defaultMessage: 'FOOTER',
  },
});
