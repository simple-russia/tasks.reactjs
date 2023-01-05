import { makeAutoObservable } from 'mobx';

class AppStore {
    counter = 0;

    constructor () {
        makeAutoObservable(this);
    }

    increment () {
        this.counter += 1;
    }
}

export const appStore = new AppStore();
