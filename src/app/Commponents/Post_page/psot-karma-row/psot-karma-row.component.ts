import {Input, Component, OnInit, ViewChild, ElementRef, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { PostResponse } from 'src/app/Model/post';
import { ReactionRequest } from 'src/app/Model/reaction';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CreateEditPostService } from 'src/app/Services/create-edit-post.service';
import { DialogService } from 'src/app/Services/dialog.service';
import { OpenReportModalService } from 'src/app/Services/OpenReportModalService';
import { PostServiceService } from 'src/app/Services/post-service.service';
import { ReactionService } from 'src/app/Services/reaction.service';
@Component({
  selector: 'app-post-karma-row',
  templateUrl: './psot-karma-row.component.html',
  styleUrls: ['./psot-karma-row.component.css']
})
export class PostKarmaRowComponent implements OnInit {

  @Input() post!: PostResponse;
  @ViewChild('settingsModal') settingsModal!: ElementRef;
  @ViewChild('upvoteElement') upvoteHtml!: ElementRef;
  @ViewChild('downovoteElement') downvoteHtml!: ElementRef;

  constructor(private authService : AuthenticationServiceService,private router : Router,private reactionService : ReactionService,private reportModalService : OpenReportModalService,
    private CreateEditService : CreateEditPostService,private dialogService : DialogService,private postService : PostServiceService,private alertService : AlertService) { }

    ngOnInit(): void {
      this.reactionService.getMyReactionToPost(this.post.id).subscribe(reaction => {
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
          this.settingsModal.nativeElement.classList.remove('active');
        }}
      });
    }
  

  canEdit(): boolean{
    const loggedIn = this.authService.getCurrentUser();
    return this.authService.isLoggedIn() && (loggedIn.username == this.post.postedBy.username);
  }

  openSettings(){
    if(this.settingsModal.nativeElement.classList.contains('active')){
      this.settingsModal.nativeElement.classList.remove('active');
      return;
    }
    this.settingsModal.nativeElement.classList.add('active');
  }

  openEditPage(){
    this.router.navigate(["/Post/Create"]);
    this.CreateEditService.addPost(this.post);
  }

  deletePost(){
    this.dialogService.addDialog({title: "Are you shure you want to delete this post?" , text: "This action can't be undone"});
    this.dialogService.okDialogEvent.subscribe( res => {
      if(res){
        this.postService.deletePost(this.post.id).subscribe( ret => {
          this.alertService.addAlert({text :("You deleted post successfully"),  type : AlertType.success});
          history.back();
          return;
        }, err => {
          if(err.status >= 400){
            this.alertService.addAlert({text : "There was problem with deleting of this post, \n please try again later!",  type : AlertType.warning});
          }
      })
    }
  });}

  upvote(){
    if(this.authService.isLoggedIn()){
    const dto : ReactionRequest = {
      reactedPostId: this.post.id,
      type: 'UPWOTE',
      reactedCommentId : null,
      belongsToCommunity : this.post.community.id
    }

    if(this.upvoteHtml.nativeElement.getAttribute('upvoted') == 'true'){
      dto.type = null;
    }

    this.reactionService.saveReaction(dto).subscribe(reaction => {
      this.upvoteHtml.nativeElement.setAttribute('upvoted' , !(this.upvoteHtml.nativeElement.getAttribute('upvoted') == 'true'));
      this.downvoteHtml.nativeElement.setAttribute('downvoted' , false);
      this.postService.getOne(this.post.id).subscribe(post => {
        this.post = post;
      });});
    }
  }

  downvote(){
    if(this.authService.isLoggedIn()){
        const dto : ReactionRequest = {
      reactedPostId: this.post.id,
      type: 'DOWNWOTE',
      reactedCommentId : null,
      belongsToCommunity : this.post.community.id
    }

    
    if(this.downvoteHtml.nativeElement.getAttribute('downvoted') == 'true'){
      dto.type = null;
    }

    this.reactionService.saveReaction(dto).subscribe(reaction => {
      this.downvoteHtml.nativeElement.setAttribute('downvoted' , !(this.downvoteHtml.nativeElement.getAttribute('downvoted') == 'true'));
      this.upvoteHtml.nativeElement.setAttribute('upvoted' , false);
        this.postService.getOne(this.post.id).subscribe(post => {
          this.post = post;
        });
  } );
  }
  }

  report(){
    if(this.authService.getCurrentUser() != null){
      this.reportModalService.reportPost(this.post);
      return;
    }
    this.alertService.addAlert({text: "You have to be logged in to report post!",type : AlertType.warning});
  }

}
