import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-title-bar',
  templateUrl: './community-title-bar.component.html',
  styleUrls: ['./community-title-bar.component.css']
})
export class CommunityTitleBarComponent implements OnInit {

  @Input() communityName!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
