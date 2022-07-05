import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommentResponse } from 'src/app/Model/comment';
import { UserResponse } from 'src/app/Model/user';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { ImgService } from 'src/app/Services/img.service';
import { OpenReportModalService } from 'src/app/Services/OpenReportModalService';
import { PostServiceService } from 'src/app/Services/post-service.service';
import { PostKarmaRowComponent } from '../../Post_page/psot-karma-row/psot-karma-row.component';
import { CommentKarmaRowComponent } from '../comment-karma-row/comment-karma-row.component';
import { CrateEditCommentCardComponent } from '../crate-edit-comment-card/crate-edit-comment-card.component';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  alertService: any;

  constructor(private imgService :ImgService,private authSercice : AuthenticationServiceService) { }

  @Input() comment!: CommentResponse
  @ViewChild(CrateEditCommentCardComponent) editCommentCard!: CrateEditCommentCardComponent;
  @ViewChild(CommentKarmaRowComponent) karmaRow!: CommentKarmaRowComponent;

  @ViewChild('commentContent') commentContent!: ElementRef;

  @Output() reloadEv : EventEmitter<boolean> = new EventEmitter();
  @Output() cencelEvent : EventEmitter<boolean> = new EventEmitter();
  stringMode = "hidden"
  loggedIn!: UserResponse;


  ngOnInit(): void {
    this.loggedIn = this.authSercice.getCurrentUser();
  }

  editComment(){
    this.commentContent.nativeElement.classList.add("hide");
    this.karmaRow.element.classList.add("hide");
    this.stringMode = "edit";
  }

  getImg() : string{
    return this.imgService.getImg(this.comment.postedBy.avatarUrl);
  }

  reload(){
    this.commentContent.nativeElement.classList.remove("hide");
    this.stringMode = "hidden";
    this.karmaRow.element.classList.remove("hide");
    this.reloadEv.emit(true);
  }

  cancel(id : number){
    this.commentContent.nativeElement.classList.remove("hide");
    this.stringMode = "hidden";
    this.karmaRow.element.classList.remove("hide");
    if(id != this.comment.id){
      this.cencelEvent.emit(true);
    }
  }

  replyToComment(){
    this.karmaRow.element.classList.add("hide");
    this.stringMode = "reply";
  }

 
  

}
