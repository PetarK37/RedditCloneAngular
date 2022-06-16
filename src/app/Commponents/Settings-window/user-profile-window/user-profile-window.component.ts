import { Component, Input, OnInit } from '@angular/core';
import { CommunityResponse } from 'src/app/Model/community';
import { UserResponse } from 'src/app/Model/user';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CommunityService } from 'src/app/Services/community.service';
import { ImgService } from 'src/app/Services/img.service';

@Component({
  selector: 'app-user-profile-window',
  templateUrl: './user-profile-window.component.html',
  styleUrls: ['./user-profile-window.component.css']
})
export class UserProfileWindowComponent implements OnInit {

  @Input() user!: UserResponse;
  communities!: CommunityResponse[];
  constructor(private authService : AuthenticationServiceService,private imgService : ImgService,private communityService : CommunityService) { }

  ngOnInit(): void {
    if(this.user == undefined){
        this.user = this.authService.getCurrentUser();
        
    }
    this.communityService.getMy(this.user.id).subscribe( res => {
      this.communities = res;
    });
  }

  getImg() : string{
    return this.imgService.getImg(this.user.avatarUrl);
  }

}
