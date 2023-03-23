import { AxiosError } from 'axios';
import { IError } from '../model/IError';

interface ErrorInstanceInterface {
  get: (err: AxiosError) => {
    status: number | undefined;
    code: number;
    message: string;
  };
}

class ErrorInstance implements ErrorInstanceInterface {
  get = (err: AxiosError) => {
    const { response } = err;
    const status = response?.status;
    const { error } = response?.data as IError;

    return { status, code: error.code, message: error.message };
  };
}

export const errorInstance = new ErrorInstance();
