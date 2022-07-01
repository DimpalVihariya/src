import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lsuccess: any;
  lfail: any;
  constructor(private router: Router,private fb:FormBuilder) { }
  loginForm: FormGroup = this.fb.group({
    username: [null,Validators.required],
    password: [null,Validators.compose([Validators.required,Validators.minLength(5)])]
  });
  ngOnInit(): void {
  }

  login(){

    console.log("login works");
  }

}
