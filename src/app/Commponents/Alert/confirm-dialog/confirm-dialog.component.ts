import { Component, ElementRef, OnInit } from '@angular/core';
import { DialogService } from 'src/app/Services/dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  title = "";
  text = "";
  element!: HTMLElement;
  constructor(private dialogService : DialogService, element : ElementRef) {
    this.element = element.nativeElement;
   }

  ngOnInit(): void {
    this.dialogService.openDialogEvent.subscribe( res => {
      this.title = this.dialogService.modal.title;
      this.text = this.dialogService.modal.text;
  });

}
  cancel(){
    this.dialogService.cancel();
    this.element.classList.remove('active');
  }

  ok(){
    this.dialogService.ok();
    this.element.classList.remove('active');
  }

}
