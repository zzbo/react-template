import axios, { AxiosRequestConfig } from 'axios';

interface IResponse<T> {
  retcode: number;
  msg?: string;
  result: T;
}

export function request<T>(
  url: string,
  requestConfig?: AxiosRequestConfig,
): Promise<T> {
  const config = {
    ...requestConfig,
    url,
  };

  return axios(config).then((response) => {
    const res: IResponse<T> = response.data;

    if (res.retcode === 0) {
      return res.result;
    }

    throw new Error(JSON.stringify(res));
  });
}

export function holder(): void {

}
