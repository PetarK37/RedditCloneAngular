import { Component, OnInit ,Output,EventEmitter,ElementRef} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertType } from 'src/app/Model/alertMessage';
import { UserRequest } from 'src/app/Model/user';
import { AlertService } from 'src/app/Services/alert.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {

  @Output() CloseModal = new EventEmitter();
  element!: HTMLElement;
  form!: FormGroup;

  constructor(element: ElementRef,
    private fb : FormBuilder,
    private userService: UserService,
    private alertService : AlertService)
    {

    this.element = element.nativeElement;
    this.form = this.fb.group({
			username :new FormControl(null, Validators.required), 
      displayName: new FormControl(''),
      email: new FormControl(null, Validators.email),
			password: new FormControl(null, Validators.required),
			repeatedPassword: new FormControl(null, Validators.required),
		});
}

  ngOnInit(): void {
  }

  closeModal(){
    this.CloseModal.emit(this.element);
    this.element.classList.remove('active')
    this.form.reset();
  }
  passwordsDontMatch(){
    return (this.form.get('password')?.value != this.form.get('repeatedPassword')?.value ) 
    && (this.form.get('repeatedPassword')?.touched && this.form.get('password')?.touched )
    && (this.form.get('password')?.value != ""  && this.form.get('repeatedPassword')?.value != "");
  }

  submit(){
    const dto: UserRequest = {
      username: "", password: "", displayName: "", email: "",
      profileDescription: null,
      avatarUrl: null
    };

    dto.username = this.form.value.username;
    dto.password = this.form.value.password;
    dto.displayName = this.form.value.displayName;
    dto.email = this.form.value.email;
    dto.profileDescription = null;
    dto.avatarUrl = null;

    if (this.form.value.password.length < 6) {
      this.alertService.addAlert({text : "Password must be at least 6 characters long!", type : AlertType.warning});
      return;
    }

    this.userService.register(dto).subscribe( result => {
      this.alertService.addAlert({text : "You successfully registered", type : AlertType.success});
      this.closeModal()
    },
      error => {
        if(error.error.emailTaken && error.error.usernameTaken){
          this.alertService.addAlert({text : "Email and Username are already taken", type : AlertType.warning})
          return;
          }
       else if(error.error.usernameTaken){
          this.alertService.addAlert({text : "Username is already taken", type : AlertType.warning});
          return;
       } 
       else if(error.error.emailTaken){
        this.alertService.addAlert({text : "Email is already taken", type : AlertType.warning});
        return;
     } 
      });
    }}
