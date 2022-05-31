import { Component, Input, OnInit } from '@angular/core';
import { CommentResponse } from 'src/app/Model/comment';
import { CommentService } from 'src/app/Services/comment.service';

@Component({
  selector: 'app-comment-karma-row',
  templateUrl: './comment-karma-row.component.html',
  styleUrls: ['./comment-karma-row.component.css']
})
export class CommentKarmaRowComponent implements OnInit {

  constructor(private commentService : CommentService) { }

  @Input() comment!: CommentResponse;
  karma!: number;

  ngOnInit(): void {
    this.commentService.getCommentKarma(this.comment.id).subscribe(res => {
      this.karma = res
    })
  }

}
