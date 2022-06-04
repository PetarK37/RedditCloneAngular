import { Component, OnInit,ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  @Output() CloseModal = new EventEmitter();
  element!: HTMLElement;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
}

  ngOnInit(): void {
  }

  closeModal(){
    this.CloseModal.emit(this.element);
    this.element.classList.remove('active');
  }

  registerModal(){
    this.CloseModal.emit("register");
    this.element.classList.remove('active');
  }

}
