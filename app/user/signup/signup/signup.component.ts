import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup | any;
  formSubmitted: boolean = false;
  submitted : boolean = false;
  buttondisable: boolean = true;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city : new FormControl('', [Validators.required]),
      postalcode : new FormControl('', [Validators.required])
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }
  }

}
