import { Injectable, EventEmitter} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlertMessage } from '../Model/alertMessage';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  openAlertEvent = new EventEmitter<boolean>();
  message!: AlertMessage;


  constructor() {
   }

   addAlert(alertMessage: AlertMessage) {
      this.message = alertMessage;
      this.openAlertEvent.emit(true);
   }
}
