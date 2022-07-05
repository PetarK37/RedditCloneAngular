import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommunityResponse } from 'src/app/Model/community';
import { ModeratorRequest } from 'src/app/Model/moderator';
import { UserResponse } from 'src/app/Model/user';
import { AlertService } from 'src/app/Services/alert.service';
import { CommunityService } from 'src/app/Services/community.service';
import { ImgService } from 'src/app/Services/img.service';
import { ModeratorService } from 'src/app/Services/moderator.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-moderator-window',
  templateUrl: './add-moderator-window.component.html',
  styleUrls: ['./add-moderator-window.component.css']
})
export class AddModeratorWindowComponent implements OnInit {

  constructor(private route : ActivatedRoute,private moderatorService : ModeratorService, private userService : UserService,
    private imgService : ImgService,private router : Router,private fb : FormBuilder,
    private communityService : CommunityService,private alertService : AlertService) 
    { 
      this.form = this.fb.group({
        username : [''],
     });
    }

  users! : UserResponse[];
  usersForRender!: UserResponse[];
  form! : FormGroup;
  community!: CommunityResponse;


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.communityService.getOne(params['id']).subscribe(community => {
        this.community = community;
      });
    });


    this.userService.getAll().subscribe(res => {
      this.users = res;
      this.usersForRender = res;
  });

  
    this.form.valueChanges.subscribe(() => {
      this.usersForRender = this.users.filter(u => u.username.toLowerCase().includes(this.form.value.username.toLowerCase()));
    });
  }

  getImg(user : UserResponse) : string{
    return this.imgService.getImg(user.avatarUrl);
  }

      
  gotoProfile(id : number){
    this.router.navigate(['/Users',id]);
  }


  cantAdd(user : UserResponse) : boolean{
    if(this.community.moderators.find(m => m.user.id == user.id)){
      return true;
    }
    return false
  }

  addModerator(user : UserResponse){
    const dto : ModeratorRequest = {
      userId : user.id,
      communityId : this.community.id
    }

    this.moderatorService.saveModerater(dto).subscribe(res => {
      this.community.moderators.push(res);
      this.alertService.addAlert({text :'Moderator added successfully',type : AlertType.success});}
      ,err => {
        this.alertService.addAlert({text :'Error while adding moderator \n please try again later!',type : AlertType.warning});
      })}
    };
