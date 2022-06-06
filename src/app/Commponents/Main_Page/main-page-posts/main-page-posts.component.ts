import { Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';
import { UserResponse } from 'src/app/Model/user';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { PostServiceService } from 'src/app/Services/post-service.service';

@Component({
  selector: 'app-main-page-posts',
  templateUrl: './main-page-posts.component.html',
  styleUrls: ['./main-page-posts.component.css']
})
export class MainPagePostsComponent implements OnInit {

  posts!: PostResponse[];
  isLoggedIn = false;

  constructor(
    private postService : PostServiceService,
    private authService : AuthenticationServiceService
  ) { }

  ngOnInit(): void {
    this.postService.getAllRandom().subscribe(
      res => {
        this.posts = res;
      });

      this.isLoggedIn = this.authService.isLoggedIn();
      this.authService.changedEvent.subscribe( res => {
        if (res){
          this.isLoggedIn = this.authService.isLoggedIn();
        }})      
  }

}
