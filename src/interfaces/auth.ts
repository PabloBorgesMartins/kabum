
export interface IAuthState {
    token: string;
    user: IUserProps;
}

export interface ISignInCredentials {
    email: string;
    password: string;
}

export interface ISignUpCredentials {
    fullName: string;
    email: string;
    password: string;
}

export interface IUpdateCredentials {
    fullName: string;
    email: string;
    password: string;
}

export interface IUserProps {
    id: number;
    fullName: string;
    email: string;
}

