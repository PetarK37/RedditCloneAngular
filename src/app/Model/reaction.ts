export interface ReactionResponse {
    id: number;
    type: string;
    madeById: number;
    postReactedToId: number | null;
    commentReactedToId: number | null;
}

export interface ReactionRequest {
    type: string | null;
    reactedPostId: number | null;
    reactedCommentId: number | null;
    belongsToCommunity : number;
}
