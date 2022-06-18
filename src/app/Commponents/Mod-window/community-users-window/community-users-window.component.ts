import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { bannedRequest } from 'src/app/Model/ban';
import { ModeratorResponse } from 'src/app/Model/moderator';
import { UserResponse } from 'src/app/Model/user';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { BannedService } from 'src/app/Services/banned.service';
import { CommunityService } from 'src/app/Services/community.service';
import { DialogService } from 'src/app/Services/dialog.service';
import { ImgService } from 'src/app/Services/img.service';
import { ModeratorService } from 'src/app/Services/moderator.service';
import { UserService } from 'src/app/Services/user.service';
import { ConfirmDialogComponent } from '../../Alert/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-community-users-window',
  templateUrl: './community-users-window.component.html',
  styleUrls: ['./community-users-window.component.css']
})
export class CommunityUsersWindowComponent implements OnInit {

  communityId : number = 0;
  users !: UserResponse[]; 
  usersForRender : UserResponse[] = [];
  banned: UserResponse[] = [];
  notBanned : UserResponse[] = [];
  moderator! : ModeratorResponse;

  @ViewChild(ConfirmDialogComponent) dialog!: ConfirmDialogComponent;


  form! : FormGroup;

  constructor(private allerService : AlertService,private authService : AuthenticationServiceService,private fb : FormBuilder, 
    private  userService : UserService,private imgService : ImgService, private route : ActivatedRoute,private dialogService : DialogService
    ,private moderatorsService : ModeratorService,private bannedService : BannedService,private router: Router) {
    this.form = this.fb.group({
      username : [''],
      blocked : [''],
   });
  }

  includesUser(user : UserResponse,list : UserResponse[]){
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == user.id) {
        return true;
      }
    }
    return false;
  }

  ngOnInit(): void {

    this.route.parent?.params.subscribe(params => {
      this.communityId = params['id'];
    });

    this.userService.getAll().subscribe( res => {
      this.users = res;
      this.usersForRender = res;
    });

    this.userService.getBanned(this.communityId).subscribe( res => {
      this.banned = res;
    });

    this.userService.getNotBanned(this.communityId).subscribe( res => {
      this.notBanned = res;   
      });
    
    

    this.form.valueChanges.subscribe(() => {
      this.usersForRender = this.users.filter(u => u.username.toLowerCase().includes(this.form.value.username.toLowerCase()));
      
      if(this.form.value.blocked == 'blocked'){
        this.usersForRender = this.users.filter(u => u.username.toLowerCase().includes(this.form.value.username.toLowerCase()));
        this.usersForRender = this.usersForRender.filter(u => this.includesUser(u,this.banned));
      }
      else if((this.form.value.blocked == 'notBlocked')){
        this.usersForRender = this.users.filter(u => u.username.toLowerCase().includes(this.form.value.username.toLowerCase()));
        this.usersForRender = this.usersForRender.filter(u => this.includesUser(u,this.notBanned));
    }});

    this.moderatorsService.getByUserAndCommunity(this.authService.getCurrentUser().id,this.communityId).subscribe( res => {
      this.moderator = res;
    });

    this.dialogService.openDialogEvent.subscribe( res => {
      if (res){
        this.showModal();
      }
    })
  }

  showModal(){
    this.dialog.element.classList.add('active');
  }



  reset(){
    this.form.get('username')?.patchValue('');
    this.form.get('blocked')?.patchValue('');
    this.usersForRender = this.users;
  }

  getImg(user : UserResponse) : string{
    return this.imgService.getImg(user.avatarUrl);
  }

  ban(user : UserResponse){
    this.dialogService.addDialog({title: "Are you shure you want to ban this user?" , text: "They will not be able to post or comment on your community"});
    const subscription = this.dialogService.okDialogEvent.subscribe( res => {
      if(res){
        const dto : bannedRequest= {
          bannedById : this.moderator.id,
          bannedUserId : user.id,
          bannedCommunityId : this.communityId}

          this.bannedService.saveBan(dto).subscribe( res => {
            this.allerService.addAlert({text : "You successfully banned " + user.username, type : AlertType.success})
            this.banned.push(user)
            this.notBanned = this.notBanned.filter(u => u.id != user.id);
            
          },err => {
            this.allerService.addAlert({text : "There was problem with database, please try again alter!" + user.username, type : AlertType.warning});
          });
          
          subscription.unsubscribe();
      }});
    }


    unBan(user : UserResponse){
      this.dialogService.addDialog({title: "Are you shure you want to un-ban this user?" , text: "They will be able to interact with community again"});
      const subscription = this.dialogService.okDialogEvent.subscribe( res => {
        if(res){
          this.bannedService.deleteBan(user.id,this.communityId).subscribe( res => {
            this.allerService.addAlert({text : "You successfully un-banned " + user.username, type : AlertType.success})
            this.notBanned.push(user);
            this.banned = this.banned.filter(u => u.id != user.id);
        }, err => {
          this.allerService.addAlert({text : "There was problem with database, please try again alter!" + user.username, type : AlertType.warning});
        })};
        subscription.unsubscribe();
      });
    }

    gotoProfile(id : number){
      this.router.navigate(['/Users',id]);
    }
}
