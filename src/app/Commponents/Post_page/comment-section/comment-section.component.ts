import { Component, Input, OnInit } from '@angular/core';
import { CommentResponse } from 'src/app/Model/comment';
import { CommentService } from 'src/app/Services/comment.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  @Input() postId!: number

  comments!: CommentResponse[]

  constructor(private commentService : CommentService) { }

  ngOnInit(): void {
    this.commentService.getAllByPost(this.postId).subscribe(
      res => {
        this.comments = res
      }
    )
  }

  sortComments(criterium : String) {
    switch(criterium) {
      case("new"):
      this.commentService.getNewAllByPost(this.postId).subscribe(
        res => {
          this.comments = res
        }
      )
      break;
      case("old"):
      this.commentService.getAllOldByPost(this.postId).subscribe(
        res => {
          this.comments = res
        }
      )
      break;
      case("top"):
      this.commentService.getAllTopByPost(this.postId).subscribe(
        res => {
          this.comments = res
        }
      )
      break;
  }
}
}
