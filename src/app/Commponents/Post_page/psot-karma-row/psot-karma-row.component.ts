import {Input, Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';
@Component({
  selector: 'app-post-karma-row',
  templateUrl: './psot-karma-row.component.html',
  styleUrls: ['./psot-karma-row.component.css']
})
export class PostKarmaRowComponent implements OnInit {

  @Input() post!: PostResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
