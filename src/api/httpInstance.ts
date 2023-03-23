import axios, { AxiosInstance, AxiosResponse } from 'axios';

const TOKEN_NAME = 'there-access-token';

const DEFAULT_CONFIG = {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  timeout: 5000,
} as const;

interface ResponseCommon<T> extends AxiosResponse {
  data: {
    error: { code: number };
    response: T;
  };
}

interface HttpInstanceInterface {
  get: <T, V>(url: string, params?: Record<string, unknown>) => Promise<V>;
  post: <T, V>(url: string, params: Record<string, unknown>) => Promise<V>;
}

class HttpInstance implements HttpInstanceInterface {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create(DEFAULT_CONFIG);
  }

  initToken = (token: string) => {
    this.instance.defaults.headers.common[TOKEN_NAME] = token;
  };

  get = async <T, V>(url: string, params?: Record<string, unknown>) => {
    const { data } = (await this.instance.post<T, V>(
      url,
      params
    )) as ResponseCommon<V>;

    return data.response;
  };

  post = async <T, V>(url: string, params: Record<string, unknown>) => {
    const { data } = (await this.instance.post<T, V>(
      url,
      params
    )) as ResponseCommon<V>;

    return data.response;
  };
}

export const httpInstance = new HttpInstance();
