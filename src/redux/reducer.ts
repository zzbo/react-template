import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { SystemData } from './types';
import * as actions from './action_type';

const initState: SystemData = {
  isLogin: true,
  userInfo: {},
};

function sysReducer(state = initState, action: BaseAction): SystemData {
  switch (action.type) {
    case actions.GET_USER_INFO: {
      return {
        ...state,
        isLogin: true,
        userInfo: action.data,
      };
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  sysData: sysReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
