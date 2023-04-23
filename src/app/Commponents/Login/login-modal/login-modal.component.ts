import { Component, OnInit,ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';
import { AlertType } from 'src/app/Model/alertMessage';
import { LoginRequest } from 'src/app/Model/user';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  @Output() CloseModal = new EventEmitter();
  element!: HTMLElement;
  form!: FormGroup;




  constructor(element: ElementRef,private fb: FormBuilder,private authService: AuthenticationServiceService,private alertService : AlertService) {
    this.element = element.nativeElement;

    this.form = this.fb.group({
			username :new FormControl(null, Validators.required), 
			password: new FormControl(null, Validators.required),
		});
}

  ngOnInit(): void {
  }

  closeModal(){
    this.CloseModal.emit(this.element);
    this.element.classList.remove('active');
    this.form.reset();
  }

  registerModal(){
    this.CloseModal.emit("register");
    this.element.classList.remove('active');
  }

  submit() {
		const dto: LoginRequest = {username : "", password: ""};
		dto.username = this.form.value.username;
		dto.password = this.form.value.password;

		this.authService.logIn(dto).subscribe(
			result => {
				localStorage.setItem('JWT', result.accessToken);
        this.authService.setCurrentUser();
        this.alertService.addAlert({text : "You successfully logged in", type : AlertType.success});
        this.authService.changeEvent();
        this.closeModal();
			},
			error => {
        this.alertService.addAlert({text : "Username or password are incorect!", type : AlertType.warning});
      }
		);


	}

}
