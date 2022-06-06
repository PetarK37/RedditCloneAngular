import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';

@Component({
  selector: 'app-logged-in-nav-menu',
  templateUrl: './logged-in-nav-menu.component.html',
  styleUrls: ['./logged-in-nav-menu.component.css']
})
export class LoggedInNavMenuComponent implements OnInit {

  element!: HTMLElement;

  constructor(element: ElementRef,private authService : AuthenticationServiceService) {
    this.element = element.nativeElement;
}

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logOut();
    this.authService.changeEvent();
  }

}
