import { fromJS } from 'immutable';
import layoutExamplesReducer from '../reducer';

describe('layoutExamplesReducer', () => {
  it('returns the initial state', () => {
    expect(layoutExamplesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
