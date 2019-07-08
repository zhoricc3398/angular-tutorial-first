import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  registerForm;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.minLength(8), Validators.pattern(/[a-bA-B0-9]{8,}/)]],
      confpassword: ['', [Validators.minLength(8), Validators.pattern(/[a-bA-B0-9]/)]],
      nickname: ['', [Validators.pattern((/[a-bA-B0-9\-]+/))]],
      phone: ['', [Validators.pattern((/^\+995[0-9]{9}/))]],
      web: ['', [Validators.pattern(/(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)]]
    })
  }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value)
    this.registerForm.reset();
  }

  get name() {
    return this.registerForm.get('name') as FormControl;
  }
}
