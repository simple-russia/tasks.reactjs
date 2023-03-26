import { action, makeObservable, observable } from 'mobx';
import { authStore } from 'stores/authStore';

class LoginStore {
    @observable login = '';
    @observable password = '';

    @observable isLoggingIn = false;

    @observable errors: Record<string, string[]> = {};


    constructor() {
        makeObservable(this);
    }


    @action
    public async logInUser () {
        this.isLoggingIn = true;
        await authStore.login(this.login, this.password);
        this.isLoggingIn = false;
    }

    @action
    public setLogin (value: string) {
        this.login = value;
    }

    @action
    public setPassword (value: string) {
        this.password = value;
    }

    @action
    public setErrors (field: string, errors: string[]) {
        this.errors[field] = errors;
    }
}

export const loginStore = new LoginStore();
