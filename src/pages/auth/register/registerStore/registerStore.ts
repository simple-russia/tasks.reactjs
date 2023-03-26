import { action, computed, makeObservable, observable } from 'mobx';
import { authStore } from 'stores/authStore';



class RegisterStore {
    @observable username = '';
    @observable password = '';
    @observable passwordRepeat = '';
    @observable checkedPolicy = false;

    @observable isRegistering = false;

    @observable errors: Record<string, string[]> = {};

    @computed
    public get isValid () {
        const isValid = !Object.values(this.errors).filter(errors => errors.length).length && this.checkedPolicy;

        return isValid;
    }

    constructor () {
        makeObservable(this);
    }

    @action
    public async registerUser () {
        this.isRegistering = true;
        await authStore.register(this.username, this.password);
        this.isRegistering = false;
    }

    @action
    public setUsername (value: string) {
        this.username = value;
    }

    @action
    public setPassword (value: string) {
        this.password = value;
    }

    @action
    public setPasswordRepeat (value: string) {
        this.passwordRepeat = value;
    }

    @action
    public setErrors (field: string, errors: string[]) {
        this.errors[field] = errors;
    }

    @action toggleCheckedPolicy = () => {
        this.checkedPolicy = !this.checkedPolicy;
    };
}


export const registerStore = new RegisterStore();
