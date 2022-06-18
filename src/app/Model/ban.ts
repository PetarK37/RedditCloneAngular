
export interface bannedRequest{
    bannedById : number;
    bannedUserId : number;
    bannedCommunityId : number;
}

export interface bannedResponse{
    id: number;
    bannedById : number;
    bannedUserId : number;
    bannedCommunityId : number;
}