import { CommentResponse } from "./comment";
import { CommunityResponse } from "./community";
import { PostResponse } from "./post";
import { UserResponse } from "./user";

export interface ReportRequest{
    reason : ReportReason;
    userId : number;
    communityId : number;
    reportedPostId : number | null;
    reportedCommentId : number | null;
}

export interface ReportResponse {
    id: number;
    reason: string;
    timestamp: Date;
    byUserId: UserResponse;
    reportedPostId?: PostResponse;
    reportedCommentId?: CommentResponse;
}

export enum ReportReason {
    BREAKS_RULES = "Brakes rules",
    HARASSMENT = "Harassment",
    HATE = "Hate speech",
    SHARING_PERSONAL_INFORMATION = "Sharing personal information",
    IMPERSONATION = "Impersonation",
    COPYRIGHT_VIOLATION = "Copyright violation",
    TRADEMARK_VIOLATION = "Trademark violation",
    SPAM = "Spam",
    SELF_HARM_OR_SUICIDE = "Self harm or suicide",
    OTHER = "Other"
}