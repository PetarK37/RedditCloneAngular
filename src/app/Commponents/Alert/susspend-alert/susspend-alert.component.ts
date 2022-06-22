import { Component, Input, OnInit, Output ,EventEmitter, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommunityResponse, SusspendReason } from 'src/app/Model/community';
import { AlertService } from 'src/app/Services/alert.service';
import { CommunityService } from 'src/app/Services/community.service';

@Component({
  selector: 'app-susspend-alert',
  templateUrl: './susspend-alert.component.html',
  styleUrls: ['./susspend-alert.component.css']
})
export class SusspendAlertComponent implements OnInit {

  @Input() community! : CommunityResponse | null;
  form!: FormGroup;
  element! : HTMLElement;

  @Output() closeEvent = new  EventEmitter();
  @Output() susspendEvent = new  EventEmitter();

  
  constructor(private fb : FormBuilder,element : ElementRef,private communityService : CommunityService,private AlertService : AlertService) {
    this.form = this.fb.group({
      reason : ['',Validators.minLength(10)],
   });
   this.element = element.nativeElement;
  }

  ngOnInit(): void {
  }

  submit(){
    const dto : SusspendReason = {
      reason : this.form.value.reason.trim(),
    }

    this.communityService.deleteCommunity(this.community!.id,this.form.value).subscribe(res => {
      this.AlertService.addAlert({text : "Community susspended successfuly", type :AlertType.success});
      this.susspendEvent.emit();
    }, err => {
      this.AlertService.addAlert({text : "There was problem in the database \n please try again later.", type :AlertType.success});
      this.cancel();
    })
  }

  cancel(){
    this.form.reset();
      this.closeEvent.emit();
  }

}
