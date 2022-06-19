import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentResponse } from 'src/app/Model/comment';
import { ImgService } from 'src/app/Services/img.service';

@Component({
  selector: 'app-comment-preview',
  templateUrl: './comment-preview.component.html',
  styleUrls: ['./comment-preview.component.css']
})
export class CommentPreviewComponent implements OnInit {

  @Input() comment! : CommentResponse | undefined;
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
    return this.imgService.getImg(this.comment!.postedBy.avatarUrl)
  }

}
