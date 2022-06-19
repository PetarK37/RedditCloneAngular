import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommentResponse } from 'src/app/Model/comment';
import { PostResponse } from 'src/app/Model/post';
import { ReportReason, ReportResponse } from 'src/app/Model/Report';
import { AlertService } from 'src/app/Services/alert.service';
import { DialogService } from 'src/app/Services/dialog.service';
import { ImgService } from 'src/app/Services/img.service';
import { ReportService } from 'src/app/Services/report.service';
import { CommentPreviewComponent } from '../../Alert/comment-preview/comment-preview.component';
import { ConfirmDialogComponent } from '../../Alert/confirm-dialog/confirm-dialog.component';
import { PostPreviewComponent } from '../../Alert/post-preview/post-preview.component';

@Component({
  selector: 'app-community-reports-window',
  templateUrl: './community-reports-window.component.html',
  styleUrls: ['./community-reports-window.component.css']
})
export class CommunityReportsWindowComponent implements OnInit {

  reportsForRender! : ReportResponse[];
  communityId : number = 0;
  @Output() selectedPost : PostResponse | undefined = undefined;
  @Output() selectedComment : CommentResponse | undefined = undefined;

  @ViewChild(PostPreviewComponent) postPreview! : PostPreviewComponent;
  @ViewChild(CommentPreviewComponent) commentPreview! : CommentPreviewComponent;
  @ViewChild(ConfirmDialogComponent) dialog!: ConfirmDialogComponent;



  constructor(private reportService : ReportService, private imgService : ImgService,private router : Router,
    private route : ActivatedRoute,private dialogService : DialogService,private allerService : AlertService) { }

  ngOnInit(): void {

    this.route.parent?.params.subscribe(params => {
      this.communityId = params['id'] ;
    });

    this.reportService.getAllByCommunity(this.communityId).subscribe( res => {
      this.reportsForRender = res;
    }
    )
    this.dialogService.openDialogEvent.subscribe( res => {
      if (res){
        this.showModal();
      }
    })
  }

  showModal(){
    this.dialog.element.classList.add('active');
  }

  closePreview(){
    this.postPreview.element.classList.remove("active");
    this.commentPreview.element.classList.remove("active");
  }

  toStr(reason : string) : string{
    return  Object(ReportReason)[reason];
}

substr(string : string){
  return string.substring(0,10) + "...";
}

  gotoContent(report : ReportResponse){
    this.postPreview.element.classList.add("active");
    this.selectedPost= report.reportedPostId;
  }


  gotoComment(report : ReportResponse){
    this.commentPreview.element.classList.add("active"); 
    this.selectedComment= report.reportedCommentId;
  }

  getImg(url: string){
    return this.imgService.getImg(url);
  }

  gotoProfile(id : number){
    this.router.navigate(['/Users',id]);
  }

  decline(report : ReportResponse){
    this.reportService.deleteReport(report.id).subscribe( res => {
      this.allerService.addAlert({text : "Report updated sucessfylly!" , type : AlertType.success});
      this.reportsForRender = this.reportsForRender.filter( r => r.reportedCommentId?.id !== report.reportedCommentId?.id || r.reportedPostId?.id !== report.reportedPostId?.id);
      return;
    }, err => {
      this.allerService.addAlert({text : "There was problem with database, please try again alter!" , type : AlertType.warning});
    });
  }

  accept(report : ReportResponse){
    this.dialogService.addDialog({title: "Are you shure you want to accept this report?" , text: "Content will be permanently deleted"});
    const subscription = this.dialogService.okDialogEvent.subscribe( res => {
      if(res){
        this.reportService.updateReport(true,report.id).subscribe( res => {
          this.reportsForRender = this.reportsForRender.filter( r => r.reportedCommentId?.id !== report.reportedCommentId?.id || r.reportedPostId?.id !== report.reportedPostId?.id);
          this.allerService.addAlert({text : "Report updated sucessfylly!" , type : AlertType.success});
          return;
        }, err => {
          this.allerService.addAlert({text : "There was problem with database, please try again alter!" , type : AlertType.warning});
        });
      }
    });
  }


}


