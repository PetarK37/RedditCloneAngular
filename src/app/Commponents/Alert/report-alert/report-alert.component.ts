import { Component, ElementRef, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { eventMethod } from '@ionic/core/dist/types/utils/overlays';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommentResponse, CommentRquest } from 'src/app/Model/comment';
import { PostRequest, PostResponse } from 'src/app/Model/post';
import { ReportReason, ReportRequest } from 'src/app/Model/Report';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { OpenReportModalService } from 'src/app/Services/OpenReportModalService';
import { ReportService } from 'src/app/Services/report.service';

@Component({
  selector: 'app-report-alert',
  templateUrl: './report-alert.component.html',
  styleUrls: ['./report-alert.component.css']
})
export class ReportAlertComponent implements OnInit {

  element! : HTMLElement;
  reasons = Object.keys(ReportReason);
  @Output() openReportEvent = new  EventEmitter();
  @Output() closeReportEvent = new  EventEmitter();

  form! : FormGroup;


  constructor(element: ElementRef,private fb : FormBuilder,private alertService : AlertService,private reportModalService : OpenReportModalService,
    private authService : AuthenticationServiceService,private reportService : ReportService){ 
    this.element = element.nativeElement;
    this.form = this.fb.group({
      reason : ['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.reportModalService.openEvent.subscribe( res => {
        this.openReportEvent.emit();
      });
    }



  toStr(reason : string) : string{
      return  Object(ReportReason)[reason];
  }
  
  cancel(){
    this.closeReportEvent.emit();
    this.reportModalService.closeReport();
    this.form.reset();
  }

  submit(){
    if(this.form.invalid){
      this.alertService.addAlert({text :"Please select a reason", type: AlertType.warning});
    }

    const dto : ReportRequest = {
      reason : this.form.value.reason,
      userId : this.authService.getCurrentUser().id,
      communityId : this.reportModalService.communityId,
      reportedCommentId : null,
      reportedPostId : null
    }

    if (this.reportModalService.postForReport != null){
      dto.reportedPostId = this.reportModalService.postForReport.id;
    }else{
      dto.reportedCommentId = this.reportModalService.commentForReport!.id;
    }

    this.reportService.createReport(dto).subscribe( res => {
      this.alertService.addAlert({text :"Report sent", type: AlertType.success});
      this.cancel();
    } , err => {
      if(err.status == 409){
        this.alertService.addAlert({text :"You have already reported this!", type: AlertType.warning});
        this.cancel();
        return;
      }
      this.alertService.addAlert({text :"Something went wrong, please try again later!", type: AlertType.warning});
      this.cancel();
    });
  }
  

}
