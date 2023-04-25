import { Component, Input, Output,OnInit, ViewChild } from '@angular/core';
import { InputBase } from 'src/app/DynamicForms/InputBase';
import { FormGroup } from '@angular/forms';
import { InputFormGenerator } from 'src/app/DynamicForms/InputFormGenerator';
import { AddInputModalComponent } from 'src/app/Commponents/Search/add-input-modal/add-input-modal/add-input-modal.component';
import { SearchService} from 'src/app/Services/search.service';
import {  Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() inputs: InputBase<string|number>[] = [];
  form!: FormGroup;
  @ViewChild(AddInputModalComponent) dialog!: AddInputModalComponent;
  logic: string = 'AND';
  fuzzy!: boolean;
  communityId: string = '0'
  @Input() intent! : string;
  @Output() closeEvent = new EventEmitter();


  constructor(private dfg: InputFormGenerator,private searchService : SearchService, private router: Router,private location: Location) { 
  }

  ngOnInit(): void {
    this.form = this.dfg.toFormGroup(this.inputs)
    
  }

  removeElement(index: number){
    this.inputs = this.inputs.filter((element, i) => {
        if (element.controlType === 'side-by-side' && (i === index-1) && (this,this.inputs[index].controlType === "side-by-side")){
          return false
        }else{
           return i !== index
        }
    });
    this.form = this.dfg.toFormGroup(this.inputs)
  }

  
  showModal(){
    this.dialog.element.classList.add('active');
  }

  toggleLogic(){
    if(this.logic === 'AND'){
      this.logic = 'OR'
    }else{
      this.logic = 'AND'
    }
  }

  toggleFuzzy(){
    this.fuzzy = !this.fuzzy
  }

  addFeild(data: any){
    this.logic = data.logic
    this.inputs.push(...this.dfg.getFeild(data.feild))
    this.form = this.dfg.toFormGroup(this.inputs)
  }

  search(){
    const keys = Object.keys(this.form.controls);
    const searchParam : Record<string, any> = {fuzzy: this.fuzzy,logic: this.logic}
    for (const key of keys) {
      const value = this.form.controls[key].value;
      searchParam[key] = value;
    }
    if(this.location.path().includes('Community')){   
        this.searchService.search(searchParam,this.location.path().substring(this.location.path().lastIndexOf('/')+1)).subscribe(res => {
            if(res){
              this.closeEvent.emit();
              this.form.reset();
              this.router.navigate(['/Search']);
            }
        })}else{
      this.searchService.search(searchParam,this.intent).subscribe(res => {
        if(res){
          this.closeEvent.emit();
          this.form.reset();
          this.router.navigate(['/Search']);
        }
      })  
    }
    
  }
}
