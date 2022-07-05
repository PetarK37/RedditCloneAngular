import { Component, EventEmitter, OnInit,Output, ViewChild ,AfterViewInit} from '@angular/core';
import { CommunityResponse } from 'src/app/Model/community';
import { ActivatedRoute,Router } from '@angular/router';
import { CommunityService } from 'src/app/Services/community.service';
import { AlertService } from 'src/app/Services/alert.service';
import { LoggedInNavMenuComponent } from '../logged-in-nav-menu/logged-in-nav-menu.component';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { UserResponse } from 'src/app/Model/user';
import { ThisReceiver } from '@angular/compiler';
import { ImgService } from 'src/app/Services/img.service';
@Component({
  selector: 'app-logged-in-navigation',
  templateUrl: './logged-in-navigation.component.html',
  styleUrls: ['./logged-in-navigation.component.css']
})
export class LoggedInNavigationComponent implements OnInit {

  communities! : CommunityResponse[];
  user! : UserResponse;

  @ViewChild(LoggedInNavMenuComponent) menu! : LoggedInNavMenuComponent;

  constructor(private route :ActivatedRoute,
    private communityService : CommunityService,
    private router: Router,
    private alertService : AlertService,
    private authService : AuthenticationServiceService,
    private imgService : ImgService) 
    { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.communityService.getAll().subscribe(
        res => { this.communities
          = res;})
        });

        this.user = this.authService.getCurrentUser();
        this.authService.changedEvent.subscribe( res => {
        if (res){
          this.user = this.authService.getCurrentUser();
        }})
    }


    navigateTo(value: string) {
      if (value) {
          this.router.navigate([value]);
      }
      return false;

  }

  openMenu(){
    if(this.menu.element.classList.contains('active')){
      this.menu.element.classList.remove('active');
      return;
    }
    this.menu.element.classList.add('active');
  }

  getImg() : string{
    return this.imgService.getImg(this.user.avatarUrl);
  }

}
