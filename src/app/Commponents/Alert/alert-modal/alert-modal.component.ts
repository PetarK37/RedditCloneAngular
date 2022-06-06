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
    this.alertService.alert$.subscribe(alert => {
      this.alertMessage = alert;
    })

    //    const message : AlertMessage = {text : "Login modal is closed", type :AlertType.warning};
    // this.alertService.addAlert(message);
    // this.alertModal.element.classList.add('active');
    // setTimeout(() => {this.alertModal.element.classList.remove('active')},2500);
  }

}
