import { Component, ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { LoginModalComponent } from './Commponents/Login/login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'redditCloneAngular';
  modal! : HTMLElement;

  @ViewChild(LoginModalComponent) loginModal!: LoginModalComponent;
  @ViewChild('overlay') overlay!: ElementRef;

  openModal(intent:String){
    if (intent == "login"){
      this.loginModal.element.classList.add('active')
      this.overlay.nativeElement.classList.add('active')
    }
  }

  closeModal(){
    this.overlay.nativeElement.classList.remove('active')
  }


  overlayClick()
  {
      this.loginModal.element.classList.remove('active');
      this.overlay.nativeElement.classList.remove('active')
    }


  ngAfterViewInit() {
 }

}
