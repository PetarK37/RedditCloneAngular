import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';
import { PostServiceService } from 'src/app/Services/post-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommunityResponse } from 'src/app/Model/community';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';


@Component({
  selector: 'app-community-page-posts',
  templateUrl: './community-page-posts.component.html',
  styleUrls: ['./community-page-posts.component.css']
})
export class CommunityPagePostsComponent implements OnInit, OnChanges {

  posts!: PostResponse[];
  isLoggedIn = false;
  @Input() community! : CommunityResponse;

  constructor(
    private postService : PostServiceService,
    private route: ActivatedRoute,
    private authService : AuthenticationServiceService
  ) { }



  ngOnInit(): void {
   
    this.authService.changedEvent.subscribe( res => {
      if (res){
        this.isLoggedIn = this.authService.isLoggedIn();
      }})
  }
  
  ngOnChanges(){
    this.postService.getAllByCommunity(this.community.id).subscribe(
      res => { this.posts = res}
    );
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}
