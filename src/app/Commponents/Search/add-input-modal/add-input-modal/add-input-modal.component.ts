import { Component, ElementRef, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-input-modal',
  templateUrl: './add-input-modal.component.html',
  styleUrls: ['./add-input-modal.component.css']
})
export class AddInputModalComponent implements OnInit {

  feild!: string;
  @Output() okEvent = new EventEmitter<any>();
  feilds! : any[];
  @Input() logic!: string;
  @Input() intent!: string;
  @Input() containsFeild!: string;
 
  communityFeilds = [{key: 'communityName',backKey: "name",name:'Community name'},{key: 'communityDescription',backKey: "description",name: "Description"},{key: 'communityDescPdfText', backKey: "pdfText",name:'Pdf description'},
{key:'communityRules',backKey: "rules", name:"Rules" },{key: 'postCount',backKey: "postCount",name: 'Post count' },{key:'avgKarma',backKey: "avgKarma",name:'Avg karma'}]

postFeilds = [{key: 'postTitle',backKey: "title",name:'Post title'},{key: 'postTxt',backKey: "text", name: "Post txt"},{key: 'postTxtPdf',backKey: "pdfText", name:'Pdf txt'},
,{key: 'postKarma',name: 'Post karma' },{key:'postFlair',backKey: "flair",name:'Post Flair'}]

  element!: HTMLElement;
  constructor( element : ElementRef) {
    this.element = element.nativeElement;
   }

  ngOnInit(): void {
    if(this.intent === 'post'){
      this.feilds= this.postFeilds
    }else{
      this.feilds = this.communityFeilds
    }
  };

  cancel(){
    this.element.classList.remove('active');
    this.feild = ""
  }

  ok(){
    if(this.feild !== "" && this.logic != ""){
      this.element.classList.remove('active');
      this.okEvent.emit({feild: this.feild,logic:this.logic})
      this.feild = ""
    }
  }

  setFeild(feild :string){
    this.feild = feild;
  }

  setLogic(logic :string){
    this.logic = logic;
  }

  avelableFeilds(){
    return this.feilds.filter(value => !this.containsFeild.includes(value.backKey))
  }
}
