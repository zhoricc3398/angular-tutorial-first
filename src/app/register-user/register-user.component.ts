import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

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
      password: ['', [Validators.minLength(8), Validators.pattern(/[\w0-9]{8,}/)]],
      confpassword: ['', [Validators.minLength(8), Validators.pattern(/[\w0-9]{8,}/)]],
      nickname: ['', [Validators.pattern(/[\w0-9\-]+/)]],
      phone: ['', [Validators.pattern(/^\+995[0-9]{9}/)]],
      web: ['', [Validators.pattern(/(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)]],
      check: ['', this.checkboxCheck]
    }, {
      validators: this.crossPassword
    })
  }

  ngOnInit() {
  }

  crossPassword(formGroup) {
    const password = formGroup.get('password').value;
    const confpassword = formGroup.get('confpassword').value;

    return password === confpassword ? null : { passwordStatus: true }
  }

  checkboxCheck(check) {
    return check.value ? null : {};
  }

  get name() {
    return this.registerForm.controls;
  }

  get disableButton() {
    return this.registerForm.invalid; 
  }

  onSubmit() {
    return this.registerForm.value;
  }
}
