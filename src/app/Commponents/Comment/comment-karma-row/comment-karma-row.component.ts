import { Component, Input, OnInit, Output,EventEmitter, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommentResponse } from 'src/app/Model/comment';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CommentService } from 'src/app/Services/comment.service';
import { OpenReportModalService } from 'src/app/Services/OpenReportModalService';
import { PostServiceService } from 'src/app/Services/post-service.service';

@Component({
  selector: 'app-comment-karma-row',
  templateUrl: './comment-karma-row.component.html',
  styleUrls: ['./comment-karma-row.component.css']
})
export class CommentKarmaRowComponent implements OnInit {

  @Input() comment!: CommentResponse;
  @Output() editEvent : EventEmitter<CommentResponse> = new EventEmitter();
  @Output() replyEvenet : EventEmitter<CommentResponse> = new EventEmitter();

  karma!: number;
  element! : HTMLElement;
  communityId : number = -1;

  
  constructor(private commentService : CommentService,private authService : AuthenticationServiceService,element : ElementRef,private alertService : AlertService
    ,  private reportModalService : OpenReportModalService,private route : ActivatedRoute,private postService : PostServiceService) { 
    this.element = element.nativeElement;
  }


  ngOnInit(): void {
    this.commentService.getCommentKarma(this.comment.id).subscribe(res => {
      this.karma = res
    })

    this.route.params.subscribe(params => {
      this.postService.getOne(params['id']).subscribe(res =>{this.communityId = res.community.id});
      });
  }

  canEdit() : boolean{
    if(this.authService.getCurrentUser() != null){
      return this.authService.getCurrentUser().id === this.comment.postedBy.id;
    }
    return false;
  }

  edit(){
    this.editEvent.emit(this.comment);
  }

  reply(){
    this.replyEvenet.emit(this.comment);
  }

  report(){
    if(this.authService.getCurrentUser() != null){
      this.reportModalService.reportComment(this.comment,this.communityId);
      return;
    }
    this.alertService.addAlert({text: "You have to be logged in to report comment!",type : AlertType.warning});
  }


}
