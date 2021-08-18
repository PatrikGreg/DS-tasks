import axios, {AxiosInstance} from 'axios';

class Api {

    private static axiosInstance: AxiosInstance;

    static init(){
        this.axiosInstance = axios.create({
            baseURL: 'https://private-803503-digismoothietest.apiary-mock.com/'
        })
    }

    static async get<ResponseType>(url: string){
        return Api.axiosInstance.get<ResponseType>(url)
    }
}

export default Api;