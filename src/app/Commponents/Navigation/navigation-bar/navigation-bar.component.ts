import { Component, OnInit } from '@angular/core';
import { CommunityResponse } from 'src/app/Model/community';
import { ActivatedRoute,Router } from '@angular/router';
import { CommunityService } from 'src/app/Services/community.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {

  communities! : CommunityResponse[];

  constructor(private route :ActivatedRoute,
    private communityService : CommunityService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.communityService.getAll().subscribe(
        res => { this.communities
          = res;})
        });
    }

    navigateTo(value: string) {
      if (value) {
          this.router.navigate([value]);
      }
      return false;
  }
}
