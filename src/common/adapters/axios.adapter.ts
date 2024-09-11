import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/htpp-adaptar.interface';

export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      throw new Error('Error on get request');
    }
  }
  post<T>(url: string, data: any): Promise<T> {
    throw new Error('Method not implemented.');
  }
  patch<T>(url: string, data: any): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete<T>(url: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
