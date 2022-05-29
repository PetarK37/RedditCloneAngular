import { Component, Input, OnInit } from '@angular/core';
import { CommunityResponse } from 'src/app/Model/community';

@Component({
  selector: 'app-post-page-asside',
  templateUrl: './post-page-asside.component.html',
  styleUrls: ['./post-page-asside.component.css']
})
export class PostPageAssideComponent implements OnInit {

  @Input() community! : CommunityResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
