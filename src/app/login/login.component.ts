import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  alert;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private authService: AuthService) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.minLength(8), Validators.pattern(/[\w0-9]{8,}/)]]
    })
  }

  ngOnInit() {
  }

  get disableButton() {
    return this.loginForm.invalid;
  }

  login({email, password}) {
    this.alert = '';

    if (this.usersService.verify(email, password)) {
      this.alert = 'You have logged in!';
      console.log('zd brat');
      this.authService.allow();
    } else {
      this.alert = 'Credentials are wrong!';
    }
  }
}
