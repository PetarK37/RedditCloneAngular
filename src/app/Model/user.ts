export interface UserResponse{
    id: number;
    username: string;
    displayName: string;
    email: string;
    avatarUrl: string;
    registrationDate: string;
    profileDescription: string;
    karma: number;
}

export interface UserRequest{

}

export interface LoginRequest {
    username: string;
    password: string;
}