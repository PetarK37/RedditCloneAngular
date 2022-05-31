
//TODO delete karma from all places (back or front)
export interface CommentResponse {
    id: number;
    text: string;
    timestamp: number[];
    postedBy: string;
    replies: CommentResponse[];
    karma: number;
}