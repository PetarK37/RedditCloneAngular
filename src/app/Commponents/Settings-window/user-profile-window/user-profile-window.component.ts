import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommunityResponse } from 'src/app/Model/community';
import { UserRequest, UserResponse } from 'src/app/Model/user';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CommunityService } from 'src/app/Services/community.service';
import { ImgService } from 'src/app/Services/img.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-profile-window',
  templateUrl: './user-profile-window.component.html',
  styleUrls: ['./user-profile-window.component.css']
})
export class UserProfileWindowComponent implements OnInit {

  user!: UserResponse;
  @ViewChild ('dispalyName') dispalyName!: ElementRef;
  @ViewChild ('nameEdit') dispalyNameEdit!: ElementRef;
  @ViewChild ('about') about!: ElementRef;
  @ViewChild ('aboutEdit') aboutEdit!: ElementRef;
  @ViewChild ('descripitonTxt') descripitonTxt!: ElementRef;
  @ViewChild ('uploadModal') uploadModal!: ElementRef;




  displayNameForm!: FormGroup;
  aboutForm!: FormGroup;
  addImgForm!: FormGroup;
  selectedFile! : File;
  previewSrc = '';



  communities!: CommunityResponse[];
  constructor(private authService : AuthenticationServiceService,private imgService : ImgService,private communityService : CommunityService,
    private fb: FormBuilder,private userService : UserService,private alertService : AlertService, private route : ActivatedRoute,private router : Router) { 
    this.displayNameForm =  this.fb.group({
			displayName :  new FormControl("")
		});

    this.aboutForm = this.fb.group({
			aboutMe :new FormControl("")
		});

    this.addImgForm = this.fb.group({
			img : new FormControl(null, Validators.required) 
		});
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id') == null){
          this.user = this.authService.getCurrentUser();
          this.communityService.getMy(this.user.id).subscribe( res => {
            this.communities = res;
          });
    }else{  
    this.route.params.subscribe(params => {
      this.userService.getOne(params['id']).subscribe(
        res => { this.user
          = res;
          this.communityService.getMy(this.user.id).subscribe( res => {
            this.communities = res;
          });
        }, err => {
          this.router.navigate(['/NotFound']);
        })});
  }


  }

  getImg() : string{
    return this.imgService.getImg(this.user.avatarUrl);
  }

  canEdit() : boolean{
    return this.route.snapshot.paramMap.get('id') == null && (this.authService.getCurrentUser().id == this.user?.id);
  }

  edit(reason : String) : void{
    switch(reason){
      case "displayName":
        this.dispalyName.nativeElement.hidden = true;
        this.dispalyNameEdit.nativeElement.hidden = false;
        this.displayNameForm.get('displayName')?.patchValue(this.user.displayName);
        return
      case "description":
        this.descripitonTxt.nativeElement.hidden = true;
        this.about.nativeElement.hidden = true;
        this.aboutEdit.nativeElement.hidden = false;
        this.aboutForm.get('aboutMe')?.patchValue(this.user.profileDescription);

        return
  }
}
  changeDisplayName(){

    const dto: UserRequest = {
      username: this.user.username, password: "", displayName: "", email: this.user.email,
      profileDescription: this.user.profileDescription,
      avatarUrl: this.user.avatarUrl
    };

    dto.displayName = this.displayNameForm.value.displayName.trim();

    this.userService.update(dto, this.user.id).subscribe( res => {
      this.user = res;
      this.dispalyName.nativeElement.hidden = false;
      this.dispalyNameEdit.nativeElement.hidden = true;
      this.alertService.addAlert({text : "You successfully updated dispalyName", type : AlertType.success});
      this.authService.setCurrentUser();} 
      , err => {
        this.alertService.addAlert({text : "Error while updating displayname!", type : AlertType.warning});
      })
  }  

  changeAboutMe(){

    const dto: UserRequest = {
      username: this.user.username, password: "", displayName: this.user.displayName, email: this.user.email,
      profileDescription: this.user.profileDescription,
      avatarUrl: this.user.avatarUrl
    };

    dto.profileDescription = this.aboutForm.value.aboutMe.trim();

    this.userService.update(dto, this.user.id).subscribe( res => {
      this.user = res;
      this.descripitonTxt.nativeElement.hidden = false;
      this.about.nativeElement.hidden = false;
      this.aboutEdit.nativeElement.hidden = true;
      this.alertService.addAlert({text : "You successfully updated description", type : AlertType.success});
      this.authService.setCurrentUser();
    } , err => {
        this.alertService.addAlert({text : "Error while updating description!", type : AlertType.warning});
      })
    
  }

  onChanged(event : any){
    if((event.target)?.files[0].size > 2000000){
      this.alertService.addAlert({text : "File is too large(limit is 2mb)!",  type : AlertType.warning});
      return;
    }
    
    this.selectedFile = (event.target)?.files[0];

    const reader = new FileReader();
     
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
    
        this.previewSrc = reader.result as string;
      };
    
    }
  }

  cancel(){
    this.uploadModal.nativeElement.classList.remove('active');
    this.previewSrc = '';
  }

  editImg(){
    this.uploadModal.nativeElement.classList.add('active');
  }

  changeImg(){
    const dto: UserRequest = {
      username: this.user.username, password: "", displayName: this.user.displayName, email: this.user.email,
      profileDescription: this.user.profileDescription,
      avatarUrl: this.user.avatarUrl
    };
    const imgData: FormData = new FormData();

            imgData.append('img', this.selectedFile, this.selectedFile.name);
            this.imgService.saveImg(imgData).subscribe( res => {
            dto.avatarUrl = res.fileName;
            this.userService.update(dto, this.user.id).subscribe( res => {
              this.user = res;
              this.cancel();
              this.alertService.addAlert({text : "You successfully updated avatar", type : AlertType.success});
              this.authService.setCurrentUser();
              this.previewSrc = '';
            } , err => {
                this.alertService.addAlert({text : "Error while updating avatar!", type : AlertType.warning});
              })
            });
  }
}
