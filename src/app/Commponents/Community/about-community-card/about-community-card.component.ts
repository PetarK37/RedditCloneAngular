import { Component, Input, OnInit } from '@angular/core';
import { CommunityResponse } from 'src/app/Model/community';

@Component({
  selector: 'app-about-community-card',
  templateUrl: './about-community-card.component.html',
  styleUrls: ['./about-community-card.component.css']
})
export class AboutCommunityCardComponent implements OnInit {

  @Input() community!: CommunityResponse;
  
  constructor() { }

  ngOnInit(): void {
  }

}
