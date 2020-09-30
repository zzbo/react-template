export interface UserInfo {
  userName: string;
}

export interface SysData {
  isLogin: boolean;
  userInfo?: UserInfo;
}
