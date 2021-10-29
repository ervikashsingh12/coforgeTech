import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationService,  } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  registerForm: FormGroup;
  submitted = false;
  // fName: string;
  // lName: string;
  // dob: Date;
  // email:string;
  loading: boolean = false;
  constructor( private router: Router, private formBuilder: FormBuilder, private registerService: NavigationService ) { }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      dateOfBirth: ['', Validators.required],
      //email: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      firstName: ['', Validators.required],
      forgetPasswordA: ['', Validators.required],
      forgetPasswordQ: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.createRegisterForm() 
  }
  
  register() {
    this.submitted = true;
    this.loading=true;
    // alert(this.registerForm.invalid);
    // if (this.registerForm.invalid) {
    //   return;
    // }
    const formData: FormGroup = Object.assign({}, this.registerForm.value);
    console.log(formData);
    this.registerService.registerUser(formData).subscribe((Response: any) => {
      if (Response != null) {
        console.log(Response);
        alert("Registered Successfully...");
        this.loading=false;
        this.router.navigate(['']);
      }
    });
  }
}