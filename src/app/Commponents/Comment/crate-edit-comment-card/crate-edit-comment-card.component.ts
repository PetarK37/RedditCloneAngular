import { Component, OnInit,EventEmitter, Input, Output, ElementRef, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommentResponse, CommentRquest } from 'src/app/Model/comment';
import { PostResponse } from 'src/app/Model/post';
import { UserResponse } from 'src/app/Model/user';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CommentService } from 'src/app/Services/comment.service';
import { ImgService } from 'src/app/Services/img.service';
import { PostServiceService } from 'src/app/Services/post-service.service';

@Component({
  selector: 'app-crate-edit-comment-card',
  templateUrl: './crate-edit-comment-card.component.html',
  styleUrls: ['./crate-edit-comment-card.component.css']
})
export class CrateEditCommentCardComponent implements OnInit{

  @Output()commentAdded: EventEmitter<boolean> = new EventEmitter();
  @Output() cancelEv : EventEmitter<number> = new EventEmitter();
  @Input() commentForEdit!: CommentResponse;

  post!: PostResponse;
 _mode = "create";

  @Input() set mode(value: string) {
    this._mode = value;

    if(this._mode == "edit"){
      this.form.patchValue({
        text : this.commentForEdit.text
      })
    }
 
 }

  form!: FormGroup;
  element! : HTMLElement;

  constructor(private authService : AuthenticationServiceService, private imgService : ImgService,private fb : FormBuilder,
    private commentService : CommentService,private alertService : AlertService,element : ElementRef,private route : ActivatedRoute,private postService : PostServiceService) { 
    this.form = this.fb.group({text : ['',Validators.required]})

      this.element = element.nativeElement;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postService.getOne(params['id']).subscribe(res =>{this.post = res});
      });
      
  }

  cancel(){
    this.cancelEv.emit(this.commentForEdit.id);
  }

  getImg() : string{
    return this.imgService.getImg(this.authService.getCurrentUser().avatarUrl);
  }

  submit() : void{
    if(this._mode == "create"){
        const dto : CommentRquest = {
          text : this.form.value.text.trim(),
          postedById : this.authService.getCurrentUser().id,
          belongsToCommunity : this.post.community.id,
          postId : this.post.id,
          commentId : null
      }

      this.commentService.saveComment(dto).subscribe( res => {
        this.commentAdded.emit(true);
        this.form.reset();
        return
      },err => {
        if(err.status == 403){
          this.alertService.addAlert({text : "You can't comment in this community!",type : AlertType.warning});
          return
        }
        this.alertService.addAlert({text : "Error while saving comment",type : AlertType.warning});
        return
      }
      );
    }else if(this._mode == "edit"){
      
      const dto : CommentRquest = {
        text : this.form.value.text.trim(),
        postedById : this.authService.getCurrentUser().id,
        belongsToCommunity : this.post.community.id,
        postId : null,
        commentId : null
    }

    this.commentService.updateComment(dto,this.commentForEdit.id).subscribe( res => {
      this.commentAdded.emit(true);
      this.form.reset();
    },err => {
      if(err.status == 403){
        this.alertService.addAlert({text : "You can't comment in this community!",type : AlertType.warning});
        return
      }
      this.alertService.addAlert({text : "Error while saving comment",type : AlertType.warning});
      return
    }
    );
  } else if(this._mode == "reply"){
    const dto : CommentRquest = {
      text : this.form.value.text.trim(),
      postedById : this.authService.getCurrentUser().id,
      belongsToCommunity : this.post.community.id,
      postId : null,
      commentId : this.commentForEdit.id
  }
  this.commentService.saveComment(dto).subscribe( res => {
    this.commentAdded.emit(true);
    this.form.reset();
    return
  },err => {
    if(err.status == 403){
      this.alertService.addAlert({text : "You can't comment in this community!",type : AlertType.warning});
      return
    }
    this.alertService.addAlert({text : "Error while saving comment",type : AlertType.warning});
    return
  }
  );}
}
}
