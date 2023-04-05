import { Component, OnInit ,Output,EventEmitter,ElementRef} from '@angular/core';
import { InputBase } from 'src/app/DynamicForms/InputBase';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {

  @Output() CloseModal = new EventEmitter();
  element!: HTMLElement;
  inputs!: InputBase<string|number>[]

  constructor(element: ElementRef){this.element = element.nativeElement;}

  ngOnInit(): void {
    this.inputs = [new InputBase<string>({
      key: "communityName",
      placeHolder: "Community name",
      type: "text",
      order: 1,
      required: true,
      value: ""
    }),
    new InputBase<string>({
      key: "communityDesv",
      placeHolder: "Community description",
      type: "text",
      order: 2,
      required: true,
      value: ""
    })]
  }

  closeModal(){
    this.CloseModal.emit(this.element);
    this.element.classList.remove('active')
    this.inputs = []
  }

}
