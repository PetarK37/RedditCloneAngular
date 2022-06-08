import { Component, ViewChild,ElementRef,AfterViewInit, OnInit } from '@angular/core';
import { LoginModalComponent } from './Commponents/Login/login-modal/login-modal.component';
import { RegisterModalComponent } from './Commponents/Register/register-modal/register-modal.component';
import { AlertMessage } from 'src/app/Model/alertMessage';
import { AlertType } from 'src/app/Model/alertMessage';
import { AlertService } from './Services/alert.service';
import { AlertModalComponent } from './Commponents/Alert/alert-modal/alert-modal.component';
import { AuthenticationServiceService } from './Services/authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'redditCloneAngular';
  modal! : HTMLElement;
  isLoggedIn = false;

  constructor(private alertService : AlertService,private authService : AuthenticationServiceService) { 
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  @ViewChild(LoginModalComponent) loginModal!: LoginModalComponent;
  @ViewChild(RegisterModalComponent) registerModla!: RegisterModalComponent;
  @ViewChild(AlertModalComponent) alertModal!: AlertModalComponent;
  @ViewChild('overlay') overlay!: ElementRef;

  openModal(intent:String){
    this.overlay.nativeElement.classList.add('active')
    if (intent == "login"){
      this.loginModal.element.classList.add('active')
    }else{
      this.registerModla.element.classList.add('active')
    }
  }

  closeModal(event : String){
    this.overlay.nativeElement.classList.remove('active')
    if(event == "register"){
      this.openModal("register");
    }
  }


  overlayClick()
    { 
      this.loginModal.element.classList.remove('active');
      this.registerModla.element.classList.remove('active');
      this.overlay.nativeElement.classList.remove('active')
    }


  ngOnInit() {
    this.alertService.openAlertEvent.subscribe( res => {
      if (res){
        this.showAllert();
      }
    })

    this.authService.changedEvent.subscribe( res => {
      if (res){
        this.isLoggedIn = this.authService.isLoggedIn();
      }})
 }

 showAllert(){
  this.alertModal.element.classList.add('active');
  setTimeout(() => {this.alertModal.element.classList.remove('active')},2800);
 }

}
