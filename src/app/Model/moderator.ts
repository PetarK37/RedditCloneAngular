import { UserResponse } from "./user";

export interface ModeratorResponse{
    id: number;
    user: UserResponse;
    community: string;
}