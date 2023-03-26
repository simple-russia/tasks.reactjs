import { makeObservable } from 'mobx';

class LoginStore {
    constructor() {
        makeObservable(this);
    }
}

export const loginStore = new LoginStore();
