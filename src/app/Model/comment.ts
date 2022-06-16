import { UserResponse } from "./user";

//TODO delete karma from all places (back or front)
export interface CommentResponse {
    id: number;
    text: string;
    timestamp: string;
    postedBy: UserResponse;
    replies: CommentResponse[];
    karma: number;
}