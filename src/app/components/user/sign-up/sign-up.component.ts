import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  emailStep = false;
  passwordStep = false;
  personalStep = false;
  locationStep = false;
  step = 0;
  success: boolean;
  error: string;

  constructor(private formBuilder : FormBuilder, private authservice: AuthService) {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.email],
      confirmEmail: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      fullName: ['', Validators.required],
      username: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
      location: ['', Validators.required]
    }, {
      validators: [this.mustMatch('email', 'confirmEmail'), this.mustMatch('password', 'confirmPassword')]
    })

  }

  ngOnInit(): void {
  }

  register() {
    this.authservice.register(this.signupForm.value).subscribe(
      result => {
        if(result) {
          this.success = true;
          data => {console.log(data)}
        }
      },
      error => {
        this.error = error;
      })
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return(formGroup: FormGroup) => {
      const control = formGroup.controls[controlName]
      const matchingControl = formGroup.controls[matchingControlName]
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true})
      }
      else {
        matchingControl.setErrors(null)
      }
    }
  }

  signupWithEmail() {
    this.next();
    this.step++;
  }

  next() {
    if (this.step == 1) {
      this.emailStep = true;
      if (this.email.invalid || this.confirmEmail.invalid) {
        return
      }
      this.step++
    }
    else if (this.step == 2) {
      this.passwordStep = true;
      if (this.password.invalid || this.confirmPassword.invalid) {
        return
      }
      this.step++
    }
    console.log(this.step);
  }

  back() {
    this.step--
    if (this.step == 1) {
      this.emailStep = false;
    }
    else if (this.step == 2) {
      this.passwordStep = false;
    }
    console.log(this.step);
  }

  onSubmit() {
    if (this.step == 3) {
      this.personalStep = true;
      if (this.fullName.invalid || this.username.invalid || this.location.invalid) {
        return
      }
    }
    this.register()
  }

  onKeypressEvent(event: any){
    return (event.charCode > 64 && event.charCode < 91) ||
    (event.charCode > 96 && event.charCode < 123) ||
    (event.charCode==32)
  }

  get email() {
    return this.signupForm.get('email')
  }

  get confirmEmail() {
    return this.signupForm.get('confirmEmail')
  }

  get password() {
    return this.signupForm.get('password')
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword')
  }

  get fullName() {
    return this.signupForm.get('fullName')
  }

  get username() {
    return this.signupForm.get('username')
  }

  get location() {
    return this.signupForm.get('location')
  }
}
