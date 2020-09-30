import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { SysData } from './types';
import * as actions from './action_type';

const initState: SysData = {
  isLogin: false,
};

function sysReducer(state = initState, action: BaseAction): SysData {
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
