import { Component, OnInit,Input, Output , EventEmitter, ElementRef} from '@angular/core';
import { PostResponse } from 'src/app/Model/post';
import { ImgService } from 'src/app/Services/img.service';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {

  @Input() post! : PostResponse | undefined;
  @Output() closePreview = new EventEmitter();
  element! : HTMLElement;

  constructor(element: ElementRef,private imgService : ImgService) {
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.closePreview.emit();
  }

  getImg(){
    return this.imgService.getImg(this.post!.imgPath);
  }
}
