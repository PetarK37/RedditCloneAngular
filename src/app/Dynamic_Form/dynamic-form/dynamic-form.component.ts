import { Component, Input, OnInit } from '@angular/core';
import { InputBase } from 'src/app/DynamicForms/InputBase';
import { FormGroup } from '@angular/forms';
import { InputFormGenerator } from 'src/app/DynamicForms/InputFormGenerator';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() inputs: InputBase<string|number>[] | null = [];
  form!: FormGroup;


  constructor(private dfg: InputFormGenerator) { }

  ngOnInit(): void {
    this.form = this.dfg.toFormGroup(this.inputs as InputBase<string|number>[])
  }

}
