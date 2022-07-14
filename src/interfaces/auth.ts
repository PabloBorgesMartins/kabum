
export interface IAuthState {
    token: string;
    user: IUserProps;
}

export interface ISignInCredentials {
    email: string;
    password: string;
}

export interface ISignUpCredentials {
    name: string;
    lastName: string;
    image: string;
    email: string;
    password: string;
}

export interface IUpdateCredentials {
    name: string;
    lastName: string;
    image: string;
    email: string;
    password: string;
}

export interface IUserProps {
    id: number;
    name: string;
    lastName: string;
    image: string;
    email: string;
}

