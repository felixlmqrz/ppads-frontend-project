import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  error: string = null;

  constructor(private AuthService: AuthService) { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const name = form.value.name;
    const password = form.value.password;
    const email = form.value.email;
    const gender = form.value.gender;
    const birthDate = form.value.birthDate;
    const address = form.value.birthDate;
    const phoneNumber = form.value.phoneNumber;
    const role = form.value.role;

    this.AuthService.signup(null, name, password, email, gender, birthDate, address, phoneNumber, role).subscribe(
      resData => {
        console.log(resData);
      },
      error => {
        this.error = 'Ocorreu um erro!';
      }
    );
  }
}
