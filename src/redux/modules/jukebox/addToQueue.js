import createActions from '../createActions';
import { postThunk } from '../../../helpers';

const addActions = createActions('addToQueue');

const addToQueue = postThunk(addActions.actionCreators, '/newadd');

// Actions
export const actions = {
  ...addActions.namedActions,
  addToQueue
};

// Reducer
// ========

const initialState = {
  isAdding: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addActions.constants.REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case addActions.constants.SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case addActions.constants.FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
