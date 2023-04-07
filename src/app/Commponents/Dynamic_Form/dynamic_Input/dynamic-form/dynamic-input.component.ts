import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from 'src/app/DynamicForms/InputBase';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent implements OnInit {
  @Input() input!: InputBase<string|number>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.input.key].valid; }

  constructor() { }

  ngOnInit(): void {
  }


}
