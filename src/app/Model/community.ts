import { Flair } from "./flair";
import { ModeratorResponse } from "./moderator";

export interface CommunityResponse{
    id:number,
    name:string,
    description:string,
    creationDate:Date,
    rules:string[],
    flairs:Flair[],
    moderators: ModeratorResponse[],
    pdfLink: string
}

export interface CommuntyRequest{
    name: string,
    description: string,
    rules: string[],
    flairs: Flair[],
    pdf: File|undefined;
}

export interface SusspendReason{
    reason: string;
}