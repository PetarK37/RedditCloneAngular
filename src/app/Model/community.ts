import { Flair } from "./flair";
import { ModeratorResponse } from "./moderator";

export interface CommunityResponse{
    id:number,
    name:string,
    description:string,
    creationDate:Date,
    rules:string[],
    flairs:Flair[],
    moderators: ModeratorResponse[]
}