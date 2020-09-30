import { Dispatch } from 'redux';
import { request } from '@/common/api';
import { showError } from '@/common/utils';
import * as actions from './action_type';
import { UserInfo } from './types';

export const loginOut = () => {
  return (dispatch: Dispatch): BaseAction<never> => {
    return dispatch({
      type: actions.LOGIN_OUT,
    });
  };
};

// 请求用户信息
export const getUserInfo = () => {
  return (dispatch: Dispatch): PromiseAction<UserInfo> => {
    return request<UserInfo>('/cgi/userInfo', {
      method: 'GET',
    }).then((data) => dispatch({
      type: actions.GET_USER_INFO,
      data,
    })).catch(showError);
  };
};
