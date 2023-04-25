import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommuntyRequest } from 'src/app/Model/community';
import { Flair } from 'src/app/Model/flair';
import { AlertService } from 'src/app/Services/alert.service';
import { CommunityService } from 'src/app/Services/community.service';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  rules :string[] = [];
  flairs : Flair[] = [];
  form! : FormGroup;
  selectedPdfFile!: File;
  pdfName = ''

  constructor(private communityService : CommunityService ,private fb: FormBuilder,private alertService : AlertService,private router : Router) {
    this.form = this.fb.group({
			name :new FormControl(null, Validators.required), 
      description: new FormControl(null, Validators.required),
      rules: new FormControl(''),
      flairs : new FormControl(''),
      pdfFile: new FormControl()
    });
   }

  ngOnInit(): void {
  }

  submit(){
    
    const formData = new FormData();
    formData.append('name',this.form.value.name.trim())
    formData.append('description',this.form.value.description.trim())
    if(this.selectedPdfFile !== undefined){
      formData.append('pdfFile',this.selectedPdfFile)
    }  
  

    for(let rule of this.rules){
      formData.append('rules',rule)
    }
    for (let flair of this.flairs){
      formData.append('flairs',JSON.stringify(flair))
    }

    if(this.flairs.length == 0){
      this.alertService.addAlert({text:  'You must add atleast one flair!', type: AlertType.warning});
      return;
    }


    this.communityService.crateCommunity(formData).subscribe( res => {
      this.alertService.addAlert({text:  'Community created successfully', type: AlertType.success});
      this.form.reset();
      this.router.navigate(['/Community/' + res.id]);
    }, err => {
      if(err.error.includes("taken")){
        this.alertService.addAlert({text: err.error, type: AlertType.warning});
        return;
      }
      this.alertService.addAlert({text:  'There was problem with creating your community \n please try again later!', type: AlertType.warning});
    });
  }

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
    if(this.form.value.flairs.length == 0){return;}
    this.flairs.push({name : this.form.value.flairs.trim()});
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
    if(this.rules.includes(this.form.value.rules)){
      this.form.get("rules")?.setValue(null);
      this.alertService.addAlert({text : "You allready added this rule!",  type : AlertType.warning});
      return;
    }
    if(this.form.value.rules.trim() == ""){return;}
    this.rules.push( this.form.value.rules);
    this.form.get("rules")?.setValue(null);
  }

  removeRule(rule : String){
    for (let i = 0; i < this.rules.length; i++) {
      if (this.rules[i] === rule) {
        this.rules.splice(i,1);
      }
    }
  }

  onPdfChanged(event : any){
    if((event.target)?.files[0].size > 2000000){
      this.alertService.addAlert({text : "File is too large(limit is 2mb)!",  type : AlertType.warning});
      return;
    }
    this.selectedPdfFile = (event.target)?.files[0];
    this.pdfName = (event.target)?.files[0].name;
  }
}
