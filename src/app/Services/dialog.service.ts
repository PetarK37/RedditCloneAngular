import { EventEmitter, Injectable } from '@angular/core';
import { ModalBox } from '../Model/alertMessage';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  openDialogEvent = new EventEmitter<number>();
  cancelDialogEvent = new EventEmitter<boolean>();
  okDialogEvent = new EventEmitter<boolean>();

  modal! : ModalBox;

  addDialog(modalBox: ModalBox, objectId : number) {
    this.modal = modalBox;
    this.openDialogEvent.emit(objectId);
  }

  cancel(){
    this.cancelDialogEvent.emit(true);
  }

  ok(){
    this.okDialogEvent.emit(true);
  }

  constructor() { }
}
