import { AxiosResponse } from 'axios';
import { BASE_API_ROUTE } from 'config/routes';
import { http } from 'services/http';
import {
    ILoginInput, ILoginOutput,
    IGetUserDataOutput,
    IRegisterInput, IRegisterOutput,
} from './dto';


const APP_NAME = 'auth';


export class AuthService {
    static async login (params: ILoginInput) {
        const response: AxiosResponse<ILoginOutput> = await http.post(`${BASE_API_ROUTE}/${APP_NAME}/login/`, params);

        return response;
    }

    static async getUserData () {
        const response: AxiosResponse<IGetUserDataOutput> = await http.get(`${BASE_API_ROUTE}/${APP_NAME}/getUserData/`);

        return response;
    }

    static async logout () {
        const response = await http.post(`${BASE_API_ROUTE}/${APP_NAME}/logout/`);

        return response;
    }

    static async register (params: IRegisterInput) {
        const response: AxiosResponse<IRegisterOutput> = await http.post(`${BASE_API_ROUTE}/${APP_NAME}/register/`, params);

        return response;
    }
}
