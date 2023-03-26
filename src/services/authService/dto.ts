interface IUserObject {
    username: string,
    id: number
}


export interface ILoginInput {
    username: string,
    password: string,
}

export type ILoginOutput = IUserObject;


export type IGetUserDataOutput = IUserObject | any;


export interface IRegisterInput {
    username: string,
    password: string,
}

export type IRegisterOutput = IUserObject;
