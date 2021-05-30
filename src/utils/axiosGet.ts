import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from '@api/axiosInstance';

export interface PromiseWithCancel<T> extends Promise<T> {
  cancel?: () => void;
}

/**
 * Wrapper around axios GET, to add automatic cancelation token
 */

export default function axiosGet<T = any, R = AxiosResponse<T>>(
  url: string,
  config?: AxiosRequestConfig | undefined,
): PromiseWithCancel<R> {
  const source = axios.CancelToken.source();
  const promise: PromiseWithCancel<R> = axiosInstance.get<T, R>(url, {
    cancelToken: source.token,
    ...config,
  });
  promise.cancel = () => source.cancel();
  return promise;
}
