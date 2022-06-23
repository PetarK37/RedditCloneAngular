import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunityResponse } from 'src/app/Model/community';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CommunityService } from 'src/app/Services/community.service';
import { SusspendAlertComponent } from '../../Alert/susspend-alert/susspend-alert.component';

@Component({
  selector: 'app-admin-settings-window',
  templateUrl: './admin-settings-window.component.html',
  styleUrls: ['./admin-settings-window.component.css']
})
export class AdminSettingsWindowComponent implements OnInit {

  communities: CommunityResponse[] = [];
  communitiesForRender : CommunityResponse[] = [];
  form! : FormGroup;

  @ViewChild (SusspendAlertComponent) susspendDialog!: SusspendAlertComponent;

 constructor(private communityService : CommunityService,private authService : AuthenticationServiceService,private fb : FormBuilder,private router: Router) {
    this.form = this.fb.group({
      name : [''],
   });
  }
   
  ngOnInit(): void {
    this.communityService.getAll().subscribe( res => {
      this.communities = res;
      this.communitiesForRender = res;});

    this.form.valueChanges.subscribe(() => {
      this.communitiesForRender = this.communities.filter(c => c.name.toLowerCase().includes(this.form.value.name.toLowerCase()));
    });
  }

  closeDialog(){
    this.susspendDialog.community = null;
    this.susspendDialog.element.classList.remove('active');
  }

  openSusspend(community : CommunityResponse){
    this.susspendDialog.community = community;
    this.susspendDialog.element.classList.add('active');
  }

  refresh(){
    this.susspendDialog.community = null;
    this.susspendDialog.element.classList.remove('active');
    this.communityService.getAll().subscribe( res => {
      this.communities = res;
      this.communitiesForRender = res;});
  }

  gotoLink(url : string, id : number){
    if(id == -1){
      this.router.navigate([url]);
    }
    this.router.navigate([url,id]);
  }

}
