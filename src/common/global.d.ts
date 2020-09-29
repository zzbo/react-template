declare interface BaseAction<T = any> {
  data: T;
  type: string;
}
