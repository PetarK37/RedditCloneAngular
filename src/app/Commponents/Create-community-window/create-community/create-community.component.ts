import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertType } from 'src/app/Model/alertMessage';
import { Flair } from 'src/app/Model/flair';
import { AlertService } from 'src/app/Services/alert.service';
import { CommunityService } from 'src/app/Services/community.service';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  rules :String[] = [];
  flairs : Flair[] = [];
  form! : FormGroup;

  constructor(private communityService : CommunityService ,private fb: FormBuilder,private alertService : AlertService) {
    this.form = this.fb.group({
			name :new FormControl(null, Validators.required), 
      description: new FormControl(null, Validators.required),
      rules: new FormControl(''),
      flairs : new FormControl(''),
    });
   }

  ngOnInit(): void {
  }

  submit(){}

  includes(flair : Flair){
    for (let i = 0; i < this.flairs.length; i++) {
      if (this.flairs[i].name == flair.name) {
        return true;
      }
    }
    return false;
  }

  addFlair(){
    if (this.includes({name : this.form.value.flairs})) {
        this.form.get("flairs")?.setValue(null);
        this.alertService.addAlert({text : "You allready added this flair!",  type : AlertType.warning});
        return;
    }
    this.flairs.push({name : this.form.value.flairs});
    this.form.get("flairs")?.setValue(null);
  }

   removeFlair(flair : Flair){
    for (let i = 0; i < this.flairs.length; i++) {
      if (this.flairs[i].name == flair.name) {
        this.flairs.splice(i,1);
      }
    }
  }

  addRule(){
    this.rules.push( this.form.value.rules);
    this.form.get("rules")?.setValue(null);
  }

  removeRule(rule : String){
    for (let i = 0; i < this.flairs.length; i++) {
      if (this.rules[i] == rule) {
        this.rules.splice(i,1);
      }
    }
  }
}
