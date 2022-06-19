import { Injectable, EventEmitter} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlertMessage } from '../Model/alertMessage';
import { CommentResponse, CommentRquest } from '../Model/comment';
import { PostRequest, PostResponse } from '../Model/post';

@Injectable({
  providedIn: 'root'
})
export class OpenReportModalService {

   communityId! : number;
  openEvent = new EventEmitter();
  postForReport!: PostResponse | null;
  commentForReport!: CommentResponse | null;  

  constructor() {
   }

   reportPost(object : PostResponse) {
      this.openEvent.emit();
      this.postForReport = object;
      this.communityId = object.community.id;
   }

   
   reportComment(object : CommentResponse,id : number) {
    this.openEvent.emit();
    this.commentForReport = object;
    this.communityId = id;
 }

    closeReport() {
        this.postForReport = null;
        this.commentForReport = null;
        this.communityId = -1;
    }
}