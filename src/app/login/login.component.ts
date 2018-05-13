import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private _formBuilder: FormBuilder, private _loginService: LoginService) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this._formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }
  submit() {
    let user = {
      'username': this.loginForm.controls.username.value,
      'password': this.loginForm.controls.password.value,
    }
    this._loginService.login(user);
    this._loginService.closeModal();
  }
  cancel() {
    this._loginService.closeModal();
  }
}
