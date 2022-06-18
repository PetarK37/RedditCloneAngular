import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-community-settings-mod-window',
  templateUrl: './community-settings-mod-window.component.html',
  styleUrls: ['./community-settings-mod-window.component.css']
})
export class CommunitySettingsModWindowComponent implements OnInit {

  communityId = 0;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.communityId = params['id'];
    });
  }

  navigate(event : string){
    switch(event){
      case 'settings':
        this.router.navigate(['Moderator/Communities/'+this.communityId]);
        break;
      case 'users':
        this.router.navigate(['Moderator/Communities/'+this.communityId+'/Users']);
        break;
      case 'reports':
        this.router.navigate(['Moderator/Communities/'+this.communityId+'/Reports']);

        break;
  }
}
}
