import { Component, ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { LoginModalComponent } from './Commponents/Login/login-modal/login-modal.component';
import { RegisterModalComponent } from './Commponents/Register/register-modal/register-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'redditCloneAngular';
  modal! : HTMLElement;

  @ViewChild(LoginModalComponent) loginModal!: LoginModalComponent;
  @ViewChild(RegisterModalComponent) registerModla!: RegisterModalComponent;
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


  ngAfterViewInit() {
 }

}
