import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommunityResponse } from 'src/app/Model/community';
import { Flair } from 'src/app/Model/flair';
import { PostRequest, PostResponse } from 'src/app/Model/post';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CommunityService } from 'src/app/Services/community.service';
import { CreateEditPostService } from 'src/app/Services/create-edit-post.service';
import { ImgService } from 'src/app/Services/img.service';
import { PostServiceService } from 'src/app/Services/post-service.service';

@Component({
  selector: 'app-create-edit-post',
  templateUrl: './create-edit-post.component.html',
  styleUrls: ['./create-edit-post.component.css']
})
export class CreateEditPostComponent implements OnInit {

  @Input() community! :  CommunityResponse;
  @Input() post! : PostResponse;

  @ViewChild('flairSelect') flairSelect!: ElementRef;
  @ViewChild('flairLabel') flairLabel! : ElementRef;

  communities! : CommunityResponse[];
  flairs! : Flair[];
  form!: FormGroup;
  selectedFile!: File;
  previewSrc = '';


  constructor(private communityService : CommunityService ,private fb: FormBuilder,private alertService : AlertService,
    private createEditService : CreateEditPostService,private authService : AuthenticationServiceService,private postService : PostServiceService,private router : Router,
    private imgService : ImgService) {    
      this.form = this.fb.group({
			title :new FormControl(null, Validators.required), 
			content: new FormControl(null, Validators.required),
      img : new FormControl(''),
      community: new FormControl(null,Validators.required),
      flair: new FormControl(null),
		});
   }

   shouldHideSelect() : boolean{
      return (this.community != undefined && this.form.get('community')?.touched == false);
   }

  ngOnInit(): void {
    this.communityService.getAll().subscribe(
      res => { this.communities
        = res;})

        this.community = this.createEditService.chooseenCommunity!;
        if (this.community != undefined){
          this.flairs = this.community.flairs;       
          this.form.get('community')?.removeValidators(Validators.required);
        }

        this.post = this.createEditService.postForEdit!;
        if (this.post != undefined || this.post != null){
          this.createEditService.reset();
          this.flairs = this.post.community.flairs;
          this.community= this.post.community;
          this.form.get('title')?.patchValue(this.post.title); 
          this.form.get('content')?.patchValue(this.post.text); 
          this.form.get('flair')?.patchValue(this.flairs.findIndex(flair => {
            return this.post.hasAFlair.name === flair.name;
          })); 
          this.form.get('community')?.removeValidators(Validators.required);
          this.previewSrc = this.imgService.getImg(this.post.imgPath);
        }
      };


      disabled() : boolean{
          if(this.post != undefined || this.post != null){
            return true;
          }
          return false;
      }

    
      selectCommunity(value :  number){
        this.community = this.communities[parseInt(value.toString()) - 1];
        this.flairs = this.community.flairs;
        this.form.get('flair')?.setValue(null);
      }

      submit(){
        
         const dto :  PostRequest = {
           title: '',
           text: '',
           imgPath: this.post == undefined  ?  null : this.post.imgPath,
           hasAFlair: null,
           communityId: -1
         }

          dto.title = this.form.value.title;
          dto.text = this.form.value.content;
          dto.hasAFlair = this.flairs[this.form.value.flair];
          dto.communityId = this.community.id;


        if((this.form.value.community != null && this.form.value.flair == null) || ( this.form.value.flair == null)){
          this.flairLabel.nativeElement.style.setProperty("visibility", "visible");
          this.flairSelect.nativeElement.classList.add('invalid');

          setTimeout(() => {this.flairLabel.nativeElement.style.setProperty("visibility" ,"hidden");
          this.flairSelect.nativeElement.classList.remove('invalid');},2000);
        }
        else{
          if(!this.form.get('img')?.touched){
            this.sendPost(dto);
          }else{
          const imgData: FormData = new FormData();

            imgData.append('img', this.selectedFile!, this.selectedFile?.name);

            this.imgService.saveImg(imgData).subscribe( res => {
            dto.imgPath = res.fileName;
            this.sendPost(dto)});
        }
      }  
        }

        onChange(event : any){
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

        sendPost(dto : PostRequest){
          if(this.post == undefined){
            this.postService.createPost(dto).subscribe(
                res => {
                  this.alertService.addAlert({text :("You added post to a " + this.community.name + " successfully"),  type : AlertType.success});
                  this.createEditService.reset();
                  history.back();
                },
                err => {
                  this.alertService.addAlert({text : "You can't post to this community!",  type : AlertType.warning});
                  history.back();
                }
                )
              }else{
                this.postService.editPost(dto,this.post.id).subscribe(
                  res => {
                    this.alertService.addAlert({text :("Post edited successfully"),  type : AlertType.success});
                    this.createEditService.reset();
                    history.back();
                  },
                  err => {
                    this.alertService.addAlert({text : "There has been problem with edit, \n  try again later.",  type : AlertType.warning});
                    history.back();
                  }
              )
            }
        }
    }
