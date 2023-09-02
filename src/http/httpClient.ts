/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { accessTokenService } from 'services/accessTokenService';
import { authService } from 'services/authService';
import { createClient } from './index';

export const httpClient = createClient();

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

function onRequest(request: AdaptAxiosRequestConfig) {
  const accessToken = accessTokenService.get();

  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  return request;
}

function onResponseSuccess(response: AxiosResponse) {
  // return response.data;
  return response;
}

async function onResponseError(error: any) {
  const originalRequest = error.config;

  if (error.response.status !== 401) {
    throw error;
  }

  const { data } = await authService.refresh();

  // eslint-disable-next-line no-console
  console.log('On 401 error, refresh token', data);

  accessTokenService.save(data.accessToken);

  return httpClient.request(originalRequest);
}

httpClient.interceptors.request.use(onRequest);
httpClient.interceptors.response.use(onResponseSuccess, onResponseError);
