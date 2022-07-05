import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';

@Component({
  selector: 'app-user-settings-sidebar',
  templateUrl: './user-settings-sidebar.component.html',
  styleUrls: ['./user-settings-sidebar.component.css']
})
export class UserSettingsSidebarComponent implements OnInit {

  @Output() navigateEvent = new EventEmitter();

  constructor(private authService : AuthenticationServiceService,private router : Router) { }

  ngOnInit(): void {
  }

  removeActive(){
    var lis = document.getElementsByTagName("li");
    for(var i = 0; i < lis.length; i++){
      lis[i].classList.remove('active');
    }
  }
  navigate(event: Event){
    this.removeActive();
    (event.target as Element).classList.add('active');
    this.navigateEvent.emit((event.target as Element).id);
  }

  logOut(){
    this.authService.logOut();
    this.authService.changeEvent();
    this.router.navigate(['/']);
  }

}
