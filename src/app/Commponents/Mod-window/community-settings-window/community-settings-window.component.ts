import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertType } from 'src/app/Model/alertMessage';
import { CommunityResponse, CommuntyRequest } from 'src/app/Model/community';
import { Flair } from 'src/app/Model/flair';
import { AlertService } from 'src/app/Services/alert.service';
import { CommunityService } from 'src/app/Services/community.service';
import { FlairService } from 'src/app/Services/flair.service';

@Component({
  selector: 'app-community-settings-window',
  templateUrl: './community-settings-window.component.html',
  styleUrls: ['./community-settings-window.component.css']
})
export class CommunitySettingsWindowComponent implements OnInit {

  community! : CommunityResponse;
  @ViewChild ('about') about!: ElementRef;
  @ViewChild ('aboutEdit') aboutEdit!: ElementRef;
  @ViewChild ('descripitonTxt') descripitonTxt!: ElementRef;
  rules :string[] = [];
  flairs : Flair[] = [];
  selectedPdfFile!: File;
  pdfName!: string;
  descriptionForm!: FormGroup;
  flairsForm!: FormGroup;
  rulesForm!: FormGroup;




  constructor(private route : ActivatedRoute,private router : Router,private communityService : CommunityService,private fb : FormBuilder,
    private alertService : AlertService, private flairService : FlairService) {
    this.descriptionForm = this.fb.group(
      {
      description : new FormControl('')
    } );

    this.flairsForm = this.fb.group(
      {
        flairs : new FormControl('')
      });

      this.rulesForm = this.fb.group(
        {
          rules : new FormControl('')
        });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      this.communityService.getOne(params['id']).subscribe( res => 
        { 
          this.community = res; 
          this.flairs = res.flairs;
          this.rules = res.rules;
        },err => {
          this.router.navigate(['/NotFound']);
        }
        )}
        );
  }

  changeDescription(){
    const dto : CommuntyRequest = {
      name : this.community.name,
      description : this.community.description,
      rules : this.rules,
      flairs : this.flairs,
      pdf: this.pdfName === '' ? undefined : this.selectedPdfFile
    }
  
    dto.description = this.descriptionForm.value.description;

    this.communityService.updateCommunity( dto,this.community.id).subscribe(res => {
      this.community = res;
      this.about.nativeElement.hidden = false;
      this.descripitonTxt.nativeElement.hidden = false;
      this.aboutEdit.nativeElement.hidden = true;
      this.alertService.addAlert({text : "Community updated!",  type : AlertType.success});
    },err => {
      this.alertService.addAlert({text : "Something went wrong, please try again later!",  type : AlertType.warning});
    });

  }

  edit(reason : string){
    switch(reason){
      case "displayName":
        return
      case "description":
        this.about.nativeElement.hidden = true;
        this.descripitonTxt.nativeElement.hidden = true;
        this.aboutEdit.nativeElement.hidden = false;
        this.descriptionForm.get('description')?.patchValue(this.community.description);
        return
  }
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
    if (this.includes({name : this.flairsForm.value.flairs})) {
        this.flairsForm.get("flairs")?.setValue(null);
        this.alertService.addAlert({text : "You allready added this flair!",  type : AlertType.warning});
        return;
    }
    if(this.flairsForm.value.flairs.length == 0){return;}
    this.flairs.push({name : this.flairsForm.value.flairs.trim()});
    console.log(this.flairs);
    this.flairsForm.get("flairs")?.setValue(null);
  }


   removeFlair(flair : Flair){
    this.flairService.deleteFlair(this.community.id, flair.name).subscribe(res => {
      for (let i = 0; i < this.flairs.length; i++) {
        if (this.flairs[i].name == flair.name) {
          this.flairs.splice(i,1);
        }
      }
    },err => {
      this.alertService.addAlert({text : "Flare is in use!",  type : AlertType.warning});
    });
  
  }

  addRule(){
    if(this.rules.includes(this.rulesForm.value.rules)){
      this.rulesForm.get("rules")?.setValue(null);
      this.alertService.addAlert({text : "You allready added this rule!",  type : AlertType.warning});
      return;
    }
    if(this.rulesForm.value.rules.trim() == ""){return;}
    this.rules.push( this.rulesForm.value.rules);
    this.rulesForm.get("rules")?.setValue(null);
  }

  removeRule(rule : String){
    for (let i = 0; i < this.rules.length; i++) {
      if (this.rules[i] === rule) {
        this.rules.splice(i,1);
      }
    }
  }

  submitFlairs(){
    const dto : CommuntyRequest = {
      name : this.community.name,
      description : this.community.description,
      rules : this.rules,
      flairs : this.flairs,
      pdf: this.selectedPdfFile
    }

    this.communityService.updateCommunity( dto,this.community.id).subscribe(res => {
      this.community = res;
      this.alertService.addAlert({text : "Community updated!",  type : AlertType.success});
    },err => {
      this.alertService.addAlert({text : "Something went wrong, please try again later!",  type : AlertType.warning});
    });
  }

  submitRules(){
    const dto : CommuntyRequest = {
      name : this.community.name,
      description : this.community.description,
      rules : this.rules,
      flairs : this.flairs,
      pdf: this.selectedPdfFile
    }

    this.communityService.updateCommunity( dto,this.community.id).subscribe(res => {
      this.community = res;
      this.alertService.addAlert({text : "Community updated!",  type : AlertType.success});
    },err => {
      this.alertService.addAlert({text : "Something went wrong, please try again later!",  type : AlertType.warning});
    });
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
