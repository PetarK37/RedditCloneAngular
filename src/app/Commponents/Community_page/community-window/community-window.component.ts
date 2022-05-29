import { Component, OnInit } from '@angular/core';
import { CommunityResponse } from 'src/app/Model/community';
import { CommunityService } from 'src/app/Services/community.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-community-window',
  templateUrl: './community-window.component.html',
  styleUrls: ['./community-window.component.css']
})
export class CommunityWindowComponent implements OnInit {

  community! : CommunityResponse;
  
  constructor(
    private communityService : CommunityService,    
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.communityService.getOne(params['id']).subscribe(
        res => { this.community
          = res;
        });
    });
  }
}
