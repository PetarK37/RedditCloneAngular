import { Component, ElementRef, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-input-modal',
  templateUrl: './add-input-modal.component.html',
  styleUrls: ['./add-input-modal.component.css']
})
export class AddInputModalComponent implements OnInit {

  // TODO fix select bugs
  feild!: string;
  @Output() okEvent = new EventEmitter<any>();
  feilds! : any[];
  @Input() logic!: string;
  @Input() intent!: string;
  @Input() containsFeild!: string;
 
  communityFeilds = [{key: 'communityName',name:'Community name'},{key: 'communityDesc', name: "Description"},{key: 'communityDescPdf', name:'Pdf description'},
{key:'communityRules', name:"Rules" },{key: 'postCount',name: 'Post count' },{key:'avgKarma',name:'Avg karma'}]

postFeilds = [{key: 'postTitle',name:'Post title'},{key: 'postTxt', name: "Post txt"},{key: 'postTxtPdf', name:'Pdf txt'},
{key:'postCommentsTxt', name:"Comment txt" },{key: 'postKarma',name: 'Post karma' },{key:'commentCount',name:'Comment count'},{key:'postFlair',name:'Post Flair'}]

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
  }

  ok(){
    this.element.classList.remove('active');
    this.okEvent.emit({feild: this.feild,logic:this.logic})
  }

  setFeild(feild :string){
    this.feild = feild;
  }
  setLogic(logic :string){
    this.logic = logic;
  }

  avelableFeilds(){
    return this.feilds.filter(value => !this.containsFeild.includes(value.key))
  }
}
