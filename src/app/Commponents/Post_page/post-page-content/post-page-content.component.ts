import { Component, Input, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';

@Component({
  selector: 'app-post-page-content',
  templateUrl: './post-page-content.component.html',
  styleUrls: ['./post-page-content.component.css']
})
export class PostPageContentComponent implements OnInit {

  @Input() post! : PostResponse;
  
  constructor() { }

  ngOnInit(): void {
  }

}
