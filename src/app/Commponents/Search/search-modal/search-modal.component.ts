import { Component, OnInit ,Output,EventEmitter,ElementRef} from '@angular/core';
import { InputBase } from 'src/app/DynamicForms/InputBase';
import { InputFormGenerator } from 'src/app/DynamicForms/InputFormGenerator';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {

  @Output() CloseModal = new EventEmitter();
  element!: HTMLElement;
  ifg!: InputFormGenerator;
  inputs!: InputBase<string|number>[]

  constructor(element: ElementRef,ifg: InputFormGenerator){this.element = element.nativeElement;
  this.ifg = ifg}

  ngOnInit(): void {
    this.inputs = this.ifg.getCommunityFeilds()
  }

  closeModal(){
    this.CloseModal.emit(this.element);
    this.element.classList.remove('active')
  }

}
