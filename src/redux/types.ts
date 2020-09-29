export interface UserInfo {
  userName?: string;
}

export interface SystemData {
  isLogin: boolean;
  userInfo: UserInfo;
}

// export interface SystemActions {
//   getUserInfo(): void;
// }

// export type SystemProps = SystemData & SystemActions;
