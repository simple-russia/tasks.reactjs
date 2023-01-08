import { BASE_API_ROUTE } from '../../config/routes';
import { http } from '../http';


const APP_NAME = 'auth';


export class AuthService {
    static async login (params: {username: string, password: string}) {
        const response = await http.post(`${BASE_API_ROUTE}/${APP_NAME}/login/`, params);

        return response;
    }

    static async getUserData () {
        const response = await http.get(`${BASE_API_ROUTE}/${APP_NAME}/getUserData/`);

        return response;
    }

    static async logout () {
        const response = await http.post(`${BASE_API_ROUTE}/${APP_NAME}/logout/`);

        return response;
    }

    static async register (params: {username: string, password: string}) {
        const response = await http.post(`${BASE_API_ROUTE}/${APP_NAME}/register/`, params);

        return response;
    }
}
