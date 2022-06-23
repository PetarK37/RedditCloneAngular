import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommunityResponse } from 'src/app/Model/community';
import { ModeratorRequest, ModeratorResponse } from 'src/app/Model/moderator';
import { UserResponse } from 'src/app/Model/user';
import { AlertService } from 'src/app/Services/alert.service';
import { CommunityService } from 'src/app/Services/community.service';
import { DialogService } from 'src/app/Services/dialog.service';
import { ImgService } from 'src/app/Services/img.service';
import { ModeratorService } from 'src/app/Services/moderator.service';
import { OpenReportModalService } from 'src/app/Services/OpenReportModalService';
import { UserService } from 'src/app/Services/user.service';
import { ConfirmDialogComponent } from '../../Alert/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-remove-moderator-window',
  templateUrl: './remove-moderator-window.component.html',
  styleUrls: ['./remove-moderator-window.component.css']
})
export class RemoveModeratorWindowComponent implements OnInit {

  constructor(private route : ActivatedRoute,private moderatorService : ModeratorService, private userService : UserService,
    private imgService : ImgService,private router : Router,private fb : FormBuilder,
    private communityService : CommunityService,private alertService : AlertService, private dialogService : DialogService) 
    { 
      this.form = this.fb.group({
        username : [''],
     });
    }

  mods! : ModeratorResponse[];
  modsForRender!: ModeratorResponse[];
  form! : FormGroup;
  community!: CommunityResponse;

  @ViewChild(ConfirmDialogComponent) dialog!: ConfirmDialogComponent;



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.communityService.getOne(params['id']).subscribe(community => {
        this.community = community;
        this.moderatorService.getAllByCommunity(this.community.id).subscribe(res => {
          this.mods = res;
          this.modsForRender = res;
         });
      });
    });

  
    this.form.valueChanges.subscribe(() => {
      this.modsForRender = this.mods.filter(u => u.user.username.toLowerCase().includes(this.form.value.username.toLowerCase()));
    });
    this.dialogService.openDialogEvent.subscribe( res => {
      if (res){
        this.showModal();
      }
    })
  }

  getImg(user : UserResponse) : string{
    return this.imgService.getImg(user.avatarUrl);
  }

      
  gotoProfile(id : number){
    this.router.navigate(['/Users',id]);
  }

  showModal(){
    this.dialog.element.classList.add('active');
  }


  removeMod(m : ModeratorResponse){
    if(this.mods.length == 1){
      this.alertService.addAlert({text: 'You can not remove the last moderator',type: AlertType.warning});
      return;
    }
    this.dialogService.addDialog({title: "Are you shure you want to remove this moderator?" , text: "They will not be moderator here anymore"},-1);
    const subscription = this.dialogService.okDialogEvent.subscribe( res => {
      if(res){
        this.moderatorService.removeModer(m.id).subscribe(res => {
          this.alertService.addAlert({text: 'Moderator removed',type: AlertType.success});
          this.mods = this.mods.filter(u => u.id != m.id);
          this.modsForRender = this.mods;
          return;
        }, err => {
          this.alertService.addAlert({text: 'Something went wrong',type: AlertType.warning});
        })};
      subscription.unsubscribe();
    });
  }

}
