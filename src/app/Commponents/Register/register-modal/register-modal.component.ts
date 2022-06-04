import { Component, OnInit ,Output,EventEmitter,ElementRef} from '@angular/core';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {

  @Output() CloseModal = new EventEmitter();
  element!: HTMLElement;

  constructor(element: ElementRef) {
    console.log(element.nativeElement);
    this.element = element.nativeElement;
}

  ngOnInit(): void {
  }

  closeModal(){
    this.CloseModal.emit(this.element);
    this.element.classList.remove('active')
  }
}
