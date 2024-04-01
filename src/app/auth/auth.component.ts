import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  error: string = null;

  constructor(private AuthService: AuthService) { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    authObs = this.AuthService.login(email, password);

    authObs.subscribe(
      resData => {
        console.log(resData)
      },
      error => {
        this.error = 'Ocorreu um erro!'
      }
    );
  }
}
