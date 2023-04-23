import { Component, Input, OnInit,ViewEncapsulation,SecurityContext } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { CommunitySearchResponse } from 'src/app/Model/community';

@Component({
  selector: 'app-community-search-resault-card',
  templateUrl: './community-search-resault-card.component.html',
  styleUrls: ['./community-search-resault-card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommunitySearchResaultCardComponent implements OnInit {

  @Input() community!: CommunitySearchResponse
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
