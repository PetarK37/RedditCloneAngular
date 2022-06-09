import {Input, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { PostResponse } from 'src/app/Model/post';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CreateEditPostService } from 'src/app/Services/create-edit-post.service';
import { DialogService } from 'src/app/Services/dialog.service';
import { PostServiceService } from 'src/app/Services/post-service.service';
@Component({
  selector: 'app-post-karma-row',
  templateUrl: './psot-karma-row.component.html',
  styleUrls: ['./psot-karma-row.component.css']
})
export class PostKarmaRowComponent implements OnInit {

  @Input() post!: PostResponse;
  @ViewChild('settingsModal') settingsModal!: ElementRef;

  constructor(private authService : AuthenticationServiceService,private router : Router,
    private CreateEditService : CreateEditPostService,private dialogService : DialogService,private postService : PostServiceService,private alertService : AlertService) { }

  ngOnInit(): void {
  }

  canEdit(): boolean{
    const loggedIn = this.authService.getCurrentUser();
    return this.authService.isLoggedIn() && (loggedIn.username == this.post.postedBy.username);
  }

  openSettings(){
    if(this.settingsModal.nativeElement.classList.contains('active')){
      this.settingsModal.nativeElement.classList.remove('active');
      return;
    }
    this.settingsModal.nativeElement.classList.add('active');
  }

  openEditPage(){
    this.router.navigate(["/Post/Create"]);
    this.CreateEditService.addPost(this.post);
  }

  deletePost(){
    this.dialogService.addDialog({title: "Are you shure you want to delete this post?" , text: "This action can't be undone"});
    this.dialogService.okDialogEvent.subscribe( res => {
      if(res){
        this.postService.deletePost(this.post.id).subscribe( ret => {
          this.alertService.addAlert({text :("You deleted post successfully"),  type : AlertType.success});
          history.back();
          return;
        }, err => {
          if(err.status == 400){
            this.alertService.addAlert({text : "There was problem with deleting of this post, \n please try again later!",  type : AlertType.warning});
          }
      })
    }
  });}

}
