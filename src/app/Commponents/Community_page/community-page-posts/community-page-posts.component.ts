import { Component, Input, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';
import { PostServiceService } from 'src/app/Services/post-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommunityResponse } from 'src/app/Model/community';


@Component({
  selector: 'app-community-page-posts',
  templateUrl: './community-page-posts.component.html',
  styleUrls: ['./community-page-posts.component.css']
})
export class CommunityPagePostsComponent implements OnInit {

  posts!: PostResponse[];
  @Input() community! : CommunityResponse;

  constructor(
    private postService : PostServiceService,
    private route: ActivatedRoute
  ) { }



  ngOnInit(): void {
  }
  
  ngOnChanges(){
    this.postService.getAllByCommunity(this.community.id).subscribe(
      res => { this.posts = res}
    );
  }

}
