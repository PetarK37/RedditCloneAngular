import { Component, Input, OnInit } from '@angular/core';
import { AlertType } from 'src/app/Model/alertMessage';
import { PostResponse } from 'src/app/Model/post';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { ImgService } from 'src/app/Services/img.service';
import { OpenReportModalService } from 'src/app/Services/OpenReportModalService';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  
  @Input() post!: PostResponse;
  

  constructor(private imgService :ImgService,private authService : AuthenticationServiceService,private alertService : AlertService,private reportModalService : OpenReportModalService) { }

  ngOnInit(): void {
  }

  getImg() : string{
    return this.imgService.getImg(this.post.imgPath);
  }

  report(){
    if(this.authService.getCurrentUser() != null){
      this.reportModalService.reportPost(this.post);
      return;
    }
    this.alertService.addAlert({text: "You have to be logged in to report post!",type : AlertType.warning});
  }
}
