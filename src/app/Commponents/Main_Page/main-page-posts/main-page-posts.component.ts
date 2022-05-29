import { Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';
import { PostServiceService } from 'src/app/Services/post-service.service';

@Component({
  selector: 'app-main-page-posts',
  templateUrl: './main-page-posts.component.html',
  styleUrls: ['./main-page-posts.component.css']
})
export class MainPagePostsComponent implements OnInit {

  posts!: PostResponse[];

  constructor(
    private postService : PostServiceService
  ) { }

  ngOnInit(): void {
    this.postService.getAllRandom().subscribe(
      res => {
        this.posts = res;
      });
  }

}
