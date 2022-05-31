import { CommunityResponse } from "./community";
import { Flair } from "./flair";
import { UserResponse } from "./user";

export interface PostResponse{
    id:number,
    title:string,
    text:string,
    creationDate:number[],
    imgPath:string,
    hasAFlair:Flair,
    postedBy:UserResponse,
    community:CommunityResponse,
    karma:number
}