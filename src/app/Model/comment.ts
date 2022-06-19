import { UserResponse } from "./user";

export interface CommentResponse {
    id: number;
    text: string;
    timestamp: string;
    postedBy: UserResponse;
    replies: CommentResponse[];
    karma: number;
}

export interface CommentRquest{
    text: string;
    postedById: number;
    commentId: number | null;
    postId: number | null;
    belongsToCommunity: number;
}