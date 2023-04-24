import { Component, Input, OnInit,ViewEncapsulation,SecurityContext } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { PostSearchResponse } from 'src/app/Model/post';

@Component({
  selector: 'app-post-search-resalut-card',
  templateUrl: './post-search-resalut-card.component.html',
  styleUrls: ['./post-search-resalut-card.component.css']
})
export class PostSearchResalutCardComponent implements OnInit {

  @Input() post!: PostSearchResponse
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
