import axios from 'axios';
import type { AxiosResponse } from 'axios';

export function httpGet(url: string, id?: number, params?: any): Promise<AxiosResponse<any>> {
    return axios.get(url, {
        params: {
            id,
            ...params
        }
    });
}

export function httpPost(url: string, body: string, params?: any): Promise<AxiosResponse<any>> {
    return axios.post(url, body, {
        params
    });
}