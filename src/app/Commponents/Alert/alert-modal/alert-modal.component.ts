import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { AlertMessage } from 'src/app/Model/alertMessage'
import { AlertType } from 'src/app/Model/alertMessage';
import { AlertService } from 'src/app/Services/alert.service';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  alertMessage!: AlertMessage;
  types =  AlertType;
  element!: HTMLElement;


  constructor(private alertService : AlertService ,element: ElementRef) {
    this.element = element.nativeElement;
  }


  ngOnInit(): void {

    this.alertService.openAlertEvent.subscribe( res => {
      if (res){
        this.alertMessage = this.alertService.message;
      }
    })
    this.alertMessage = this.alertService.message;
  }

}
