import { Component, Input, OnInit } from '@angular/core';
import { CommentResponse } from 'src/app/Model/comment';
import { ImgService } from 'src/app/Services/img.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  constructor(private imgService :ImgService) { }

  @Input() comment!: CommentResponse

  ngOnInit(): void {
  }


  getImg() : string{
    return this.imgService.getImg(this.comment.postedBy.avatarUrl);
  }
  

}
