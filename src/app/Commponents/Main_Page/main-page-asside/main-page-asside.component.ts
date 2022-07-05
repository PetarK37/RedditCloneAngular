import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/Services/community.service';
import { CommunityResponse } from 'src/app/Model/community';

@Component({
  selector: 'app-main-page-asside',
  templateUrl: './main-page-asside.component.html',
  styleUrls: ['./main-page-asside.component.css']
})
export class MainPageAssideComponent implements OnInit {

  constructor(private communityService : CommunityService) { }

  communities!: CommunityResponse[];
  ngOnInit(): void {
     this.communityService.getAll().subscribe(
        res => { this.communities = res}
     );
  }

}
