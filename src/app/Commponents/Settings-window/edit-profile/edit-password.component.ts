import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertType } from 'src/app/Model/alertMessage';
import { PasswordChange, UserResponse } from 'src/app/Model/user';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {

  user!: UserResponse;

  form!: FormGroup;
  constructor(
    private fb : FormBuilder,
    private userService: UserService,
    private alertService : AlertService,
    private authService : AuthenticationServiceService)
    {

    this.form = this.fb.group({
      oldPassword: new FormControl(null, Validators.required),
			password: new FormControl(null, Validators.required),
			repeatedPassword: new FormControl(null, Validators.required),
		});
  }


  passwordsDontMatch(){
    return (this.form.get('password')?.value != this.form.get('repeatedPassword')?.value ) 
    && (this.form.get('repeatedPassword')?.touched && this.form.get('password')?.touched )
    && (this.form.get('password')?.value != ""  && this.form.get('repeatedPassword')?.value != "");
  }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }

  submit(){
    const dto : PasswordChange = {
      oldPassword: this.form.value.oldPassword.trim(), password: this.form.value.password.trim()}

      if (this.form.value.password.length < 6) {
        this.alertService.addAlert({text : "Password must be at least 6 characters long!", type : AlertType.warning});
        return;
      }

      this.userService.updatePassword(dto,this.user.id).subscribe( res => {
        this.alertService.addAlert({text : "Password updated successfully", type : AlertType.success})
        history.back();
        ;},
        err => {
          if(err.status == 401){
            this.alertService.addAlert( {text : "Old password is incorect!", type : AlertType.warning});
          }else{
            this.alertService.addAlert( {text : "Problem with database, please try again later!", type : AlertType.warning});
          }
        });

  }

}
