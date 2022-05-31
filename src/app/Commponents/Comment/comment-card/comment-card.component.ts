import { Component, Input, OnInit } from '@angular/core';
import { CommentResponse } from 'src/app/Model/comment';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  constructor() { }

  @Input() comment!: CommentResponse

  ngOnInit(): void {
  }

}
