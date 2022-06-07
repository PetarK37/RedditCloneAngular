import { Injectable, EventEmitter} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlertMessage } from '../Model/alertMessage';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alert = new Subject<AlertMessage>();
  openAlertEvent = new EventEmitter<boolean>();
  alert$ = this.alert.asObservable();
  message!: AlertMessage;


  constructor() {
   }

   addAlert(alertMessage: AlertMessage) {
      this.message = alertMessage;
      this.openAlertEvent.emit(true);
   }

   removeAlert() {
      this.alert.complete();
   }
}
