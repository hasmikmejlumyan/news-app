import axios, { Method, AxiosResponse } from "axios";

const axiosApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

const request = <T = any, D = any, R = AxiosResponse<T>>(method: Method, url: string, data?: D): Promise<R | any> => {
    return axiosApi.request<T, R, D>({
        method,
        url,
        data,
    }).then((res): R => {
        return res;
    }).catch((e): any => {
        return e.response;
    })
}

export default request;