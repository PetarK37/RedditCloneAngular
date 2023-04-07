import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { CommunityResponse } from 'src/app/Model/community';
import { ActivatedRoute,Router } from '@angular/router';
import { CommunityService } from 'src/app/Services/community.service';
import { Location } from '@angular/common';




@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {

  communities! : CommunityResponse[];
  @Output() ModalEvent = new EventEmitter();
  currentRoute!: string;


  constructor(private route :ActivatedRoute,
    private communityService : CommunityService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.communityService.getAll().subscribe(
        res => { this.communities
          = res;
        this.currentRoute = this.location.path()})
        });
        this.currentRoute = this.location.path();

        this.router.events.subscribe(event => { 
          this.currentRoute = this.location.path();;
        });
    }

    navigateTo(value: string) {
      if (value) {
          this.router.navigate([value]);
          this.currentRoute = value
      }
      return false;
  }

  loginModal(){
      this.ModalEvent.emit("login");
  }

  searchModal(){
    this.ModalEvent.emit("searchCommunity");
  }

  searchPostsModal(){
    this.ModalEvent.emit("searchPost");
  }

  registerModal(){
    this.ModalEvent.emit("register");
}

  
}
