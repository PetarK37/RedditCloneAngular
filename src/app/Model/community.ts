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
    pdfFileName: string
}

export interface CommuntyRequest{
    name: string,
    description: string,
    rules: string[],
    flairs: Flair[],
    pdfFile: File|undefined;
}

export interface SusspendReason{
    reason: string;
}

export interface CommunitySearchResponse{
    id:number,
    name:string,
    postCount:number,
    avgKarma:number;
    highlighterTxt:string
}