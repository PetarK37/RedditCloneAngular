import { EventEmitter, Injectable } from '@angular/core';
import { ModalBox } from '../Model/alertMessage';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  openDialogEvent = new EventEmitter<boolean>();
  cancelDialogEvent = new EventEmitter<boolean>();
  okDialogEvent = new EventEmitter<boolean>();

  modal! : ModalBox;

  addDialog(modalBox: ModalBox) {
    this.modal = modalBox;
    this.openDialogEvent.emit(true);
  }

  cancel(){
    this.cancelDialogEvent.emit(true);
  }

  ok(){
    this.okDialogEvent.emit(true);
  }

  constructor() { }
}
