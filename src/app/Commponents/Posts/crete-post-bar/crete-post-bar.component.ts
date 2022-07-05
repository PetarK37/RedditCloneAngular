import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityResponse } from 'src/app/Model/community';
import { PostResponse } from 'src/app/Model/post';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CreateEditPostService } from 'src/app/Services/create-edit-post.service';
import { ImgService } from 'src/app/Services/img.service';

@Component({
  selector: 'app-crete-post-bar',
  templateUrl: './crete-post-bar.component.html',
  styleUrls: ['./crete-post-bar.component.css']
})
export class CretePostBarComponent implements OnInit {

  @Input() chosenCommunity! :  CommunityResponse;
  @Input() postForEdit! : PostResponse;

  constructor(    private router: Router ,private CreateEditService : CreateEditPostService ,private authService : AuthenticationServiceService,private imgServce :ImgService) { }

  ngOnInit(): void {
    
  }

  getImg() : string{
    return this.imgServce.getImg(this.authService.getCurrentUser().avatarUrl);
  }

  openCreatePage(){
    this.router.navigate(["/Post/Create"]);
    this.CreateEditService.chooseCommunity(this.chosenCommunity);
  }

}
