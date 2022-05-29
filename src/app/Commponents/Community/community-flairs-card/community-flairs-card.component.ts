import { Component, Input, OnInit } from '@angular/core';
import { Flair } from 'src/app/Model/flair';
@Component({
  selector: 'app-community-flairs-card',
  templateUrl: './community-flairs-card.component.html',
  styleUrls: ['./community-flairs-card.component.css']
})
export class CommunityFlairsCardComponent implements OnInit {

  @Input() flairs!: Flair[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
