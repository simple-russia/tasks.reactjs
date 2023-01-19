import { action, computed, makeObservable, observable } from 'mobx';



class RegisterStore {
    @observable username = '';
    @observable password = '';
    @observable passwordRepeat = '';

    @observable errors: Record<string, string[]> = {};

    @computed
    public get isValid () {
        return !!Object.values(this.errors).filter(errors => errors.length).length;
    }

    constructor () {
        makeObservable(this);
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
}


export const registerStore = new RegisterStore();
