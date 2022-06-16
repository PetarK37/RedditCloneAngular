import {Input, Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';
import { ImgService } from 'src/app/Services/img.service';

@Component({
  selector: 'app-post-title-row',
  templateUrl: './post-title-row.component.html',
  styleUrls: ['./post-title-row.component.css']
})
export class PostTitleRowComponent implements OnInit {

  @Input() post!: PostResponse;
  constructor(private imgService :ImgService) { }

  ngOnInit(): void {
  }

  getImg() : string{
    return this.imgService.getImg(this.post.postedBy.avatarUrl);
  }

}
