import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommunityResponse } from 'src/app/Model/community';
import { UserResponse } from 'src/app/Model/user';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CommunityService } from 'src/app/Services/community.service';

@Component({
  selector: 'app-mod-settings-window',
  templateUrl: './mod-settings-window.component.html',
  styleUrls: ['./mod-settings-window.component.css']
})
export class ModSettingsWindowComponent implements OnInit {

  communities: CommunityResponse[] = [];
  communitiesForRender : CommunityResponse[] = [];
  mod! : UserResponse;
  form! : FormGroup;

  constructor(private communityService : CommunityService,private authService : AuthenticationServiceService,private fb : FormBuilder) {
    this.form = this.fb.group({
      name : [''],
   });
  }

  ngOnInit(): void {
    this.mod = this.authService.getCurrentUser();
    this.communityService.getMy(this.mod.id).subscribe( res => {
      this.communities = res;
      this.communitiesForRender = res;
    });

    this.form.valueChanges.subscribe(() => {
      this.communitiesForRender = this.communities.filter(c => c.name.toLowerCase().includes(this.form.value.name.toLowerCase()));
    });
  }
}
