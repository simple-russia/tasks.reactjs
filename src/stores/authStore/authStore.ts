import { action, makeObservable, observable } from 'mobx';
import { AuthService } from '../../services/authService';
import { IUser } from './types';


class AuthStore {
    @observable currentUser: IUser | null = null;
    @observable isFetchingUserData = false;


    constructor () {
        makeObservable(this);
    }


    @action
    public async login (username: string, password: string) {
        const data = { username, password };

        const response = await AuthService.login(data);

        this.currentUser = response.data;
    }

    @action
    public async getUserData () {
        const response = await AuthService.getUserData();
        this.currentUser = response.data;
    }

    @action
    public async register (username: string, password: string) {
        const data = { username, password };

        const response = await AuthService.register(data);

        this.currentUser = response.data;
    }

    @action
    public async logout () {
        await AuthService.logout();
        this.currentUser = null;
    }
}


export const authStore = new AuthStore();
