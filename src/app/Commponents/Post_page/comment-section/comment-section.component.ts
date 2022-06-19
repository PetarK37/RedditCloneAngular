import { Component, Input, OnInit } from '@angular/core';
import { CommentResponse } from 'src/app/Model/comment';
import { PostResponse } from 'src/app/Model/post';
import { UserResponse } from 'src/app/Model/user';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CommentService } from 'src/app/Services/comment.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  @Input() post!: PostResponse;
  loggedUser! : UserResponse;

  comments!: CommentResponse[]

  constructor(private commentService : CommentService,private authService : AuthenticationServiceService) { }

  ngOnInit(): void {
    this.loggedUser = this.authService.getCurrentUser();

    this.commentService.getAllByPost(this.post.id).subscribe(
      res => {
        this.comments = res
        console.log(this.comments);
      }
    )

    this.authService.changedEvent.subscribe(
      res => {
        if(res){
          this.loggedUser = this.authService.getCurrentUser();
        }
      });

  }

  reload(){
    this.commentService.getAllByPost(this.post.id).subscribe(
      res => {
        this.comments = res
      }
    )
  }

  sortComments(criterium : String) {
    switch(criterium) {
      case("new"):
      this.commentService.getNewAllByPost(this.post.id).subscribe(
        res => {
          this.comments = res
        }
      )
      break;
      case("old"):
      this.commentService.getAllOldByPost(this.post.id).subscribe(
        res => {
          this.comments = res
        }
      )
      break;
      case("top"):
      this.commentService.getAllTopByPost(this.post.id).subscribe(
        res => {
          this.comments = res
        }
      )
      break;
  }
}
}
