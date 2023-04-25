import { Component, OnInit ,Output,EventEmitter,ElementRef, Input} from '@angular/core';
import { InputBase } from 'src/app/DynamicForms/InputBase';
import { InputFormGenerator } from 'src/app/DynamicForms/InputFormGenerator';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {

  @Output() CloseModal = new EventEmitter();
  @Input() title!: string
  @Input() intent!: string


  element!: HTMLElement;
  ifg!: InputFormGenerator;
  inputs!: InputBase<string|number>[]

  constructor(element: ElementRef,ifg: InputFormGenerator){this.element = element.nativeElement;
  this.ifg = ifg}

  ngOnInit(): void {
      if (this.intent === "community"){
        this.inputs = this.ifg.getFeild('communityName')
      }else if(this.intent === "post"){
        this.inputs = this.ifg.getFeild('postTitle') 
      }
      else{
        this.inputs = []
      }
  }

  closeModal(){
    this.CloseModal.emit(this.element);
    this.element.classList.remove('active')
  }

}
