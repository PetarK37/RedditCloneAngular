import {Input, Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';

@Component({
  selector: 'app-post-title-row',
  templateUrl: './post-title-row.component.html',
  styleUrls: ['./post-title-row.component.css']
})
export class PostTitleRowComponent implements OnInit {

  @Input() post!: PostResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
