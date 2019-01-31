/*
 * LayoutExamples Messages
 *
 * This contains all the text for the LayoutExamples container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LayoutExamples';

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
  mockText: {
    id: `${scope}.mockText`,
    defaultMessage: 'MOCK MOCK MOCK MOCK',
  },
  backHome: {
    id: `${scope}.backHome`,
    defaultMessage: 'GO BACK TO HOME PAGE',
  },
  writingMode: {
    id: `${scope}.writingMode`,
    defaultMessage: 'WRITING MODES LEVEL',
  },
});
