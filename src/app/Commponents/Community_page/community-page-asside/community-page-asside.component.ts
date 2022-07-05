import { Component, Input, OnInit, Output } from '@angular/core';
import { CommunityResponse } from 'src/app/Model/community';



@Component({
  selector: 'app-community-page-asside',
  templateUrl: './community-page-asside.component.html',
  styleUrls: ['./community-page-asside.component.css']
})
export class CommunityPageAssideComponent implements OnInit {

  @Input() community! : CommunityResponse;
  
  constructor() { }

  ngOnInit(): void {
  
  }

}
