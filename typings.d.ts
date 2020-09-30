declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
}

declare interface BaseAction<T = any> {
  data?: T;
  type: string;
}

declare type PromiseAction<T = any> = Promise<void | { type: string; data?: T; }>

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;
