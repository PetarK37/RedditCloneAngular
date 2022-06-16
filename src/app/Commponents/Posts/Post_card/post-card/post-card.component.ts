import { Component, Input, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';
import { ImgService } from 'src/app/Services/img.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  
  @Input() post!: PostResponse;

  constructor(private imgService :ImgService) { }

  ngOnInit(): void {
  }

  getImg() : string{
    return this.imgService.getImg(this.post.imgPath);
  }

}
