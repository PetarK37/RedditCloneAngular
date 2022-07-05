import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-rules-card',
  templateUrl: './community-rules-card.component.html',
  styleUrls: ['./community-rules-card.component.css']
})
export class CommunityRulesCardComponent implements OnInit {

  @Input() rules!: String[];

  constructor() { }

  ngOnInit(): void {
  }

}
