import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the layoutExamples state domain
 */

const selectLayoutExamplesDomain = state =>
  state.get('layoutExamples', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by LayoutExamples
 */

const makeSelectLayoutExamples = () =>
  createSelector(selectLayoutExamplesDomain, substate => substate.toJS());

export default makeSelectLayoutExamples;
export { selectLayoutExamplesDomain };
