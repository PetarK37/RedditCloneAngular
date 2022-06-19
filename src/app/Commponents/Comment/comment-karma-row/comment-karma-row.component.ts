import { Component, Input, OnInit, Output,EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommentResponse } from 'src/app/Model/comment';
import { ReactionRequest } from 'src/app/Model/reaction';
import { UserResponse } from 'src/app/Model/user';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CommentService } from 'src/app/Services/comment.service';
import { OpenReportModalService } from 'src/app/Services/OpenReportModalService';
import { PostServiceService } from 'src/app/Services/post-service.service';
import { ReactionService } from 'src/app/Services/reaction.service';

@Component({
  selector: 'app-comment-karma-row',
  templateUrl: './comment-karma-row.component.html',
  styleUrls: ['./comment-karma-row.component.css']
})
export class CommentKarmaRowComponent implements OnInit {

  @Input() comment!: CommentResponse;
  @Output() editEvent : EventEmitter<CommentResponse> = new EventEmitter();
  @Output() replyEvenet : EventEmitter<CommentResponse> = new EventEmitter();

  @ViewChild('upvoteElement') upvoteHtml!: ElementRef;
  @ViewChild('downovoteElement') downvoteHtml!: ElementRef;

  karma!: number;
  element! : HTMLElement;
  communityId : number = -1;

  loggedUser!: UserResponse;

  
  constructor(private commentService : CommentService,private authService : AuthenticationServiceService,element : ElementRef,private alertService : AlertService
    ,  private reportModalService : OpenReportModalService,private route : ActivatedRoute,private postService : PostServiceService,private reactionService : ReactionService) { 
    this.element = element.nativeElement;
  }


  ngOnInit(): void {
    this.commentService.getCommentKarma(this.comment.id).subscribe(res => {
      this.karma = res
    })

    this.route.params.subscribe(params => {
      this.postService.getOne(params['id']).subscribe(res =>{this.communityId = res.community.id});
      });

    this.loggedUser =(this.authService.getCurrentUser());

    this.reactionService.getMyReactionToComment(this.comment.id).subscribe(reaction => {
      if(reaction.type == 'UPWOTE'){
        this.upvoteHtml.nativeElement.setAttribute('upvoted' , true);
        return;
      }
      if(reaction.type == 'DOWNWOTE'){
        this.downvoteHtml.nativeElement.setAttribute('downvoted' , true);
        return;
      }
    });

    this.authService.changedEvent.subscribe(res => {
      if(res){
        if(!this.authService.isLoggedIn()){
        this.upvoteHtml.nativeElement.setAttribute('upvoted' , false);
        this.downvoteHtml.nativeElement.setAttribute('downvoted' , false);
      }}
    });
  }

  canEdit() : boolean{
    if(this.loggedUser != null){
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

  upvote(){
    if(this.authService.isLoggedIn()){
    const dto : ReactionRequest = {
      reactedPostId: null,
      type: 'UPWOTE',
      reactedCommentId : this.comment.id,
      belongsToCommunity : this.communityId
    }

    if(this.upvoteHtml.nativeElement.getAttribute('upvoted') == 'true'){
      dto.type = null;
    }

    this.reactionService.saveReaction(dto).subscribe(reaction => {
      this.upvoteHtml.nativeElement.setAttribute('upvoted' , !(this.upvoteHtml.nativeElement.getAttribute('upvoted') == 'true'));
      this.downvoteHtml.nativeElement.setAttribute('downvoted' , false);
      this.commentService.getOneComment(this.comment.id).subscribe(res => {
        this.comment = res;
        this.karma = res.karma;
      });});
    }
  }

  downvote(){
    if(this.authService.isLoggedIn()){
        const dto : ReactionRequest = {
      reactedPostId: null,
      type: 'DOWNWOTE',
      reactedCommentId : this.comment.id,
      belongsToCommunity : this.communityId
    }

    
    if(this.downvoteHtml.nativeElement.getAttribute('downvoted') == 'true'){
      dto.type = null;
    }

    this.reactionService.saveReaction(dto).subscribe(reaction => {
      this.downvoteHtml.nativeElement.setAttribute('downvoted' , !(this.downvoteHtml.nativeElement.getAttribute('downvoted') == 'true'));
      this.upvoteHtml.nativeElement.setAttribute('upvoted' , false);
       this.commentService.getOneComment(this.comment.id).subscribe(res => {
        this.comment = res;
        this.karma = res.karma;
      });});
  }
  }


}
