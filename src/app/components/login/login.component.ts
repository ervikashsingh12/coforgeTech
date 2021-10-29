import { Component, EventEmitter, OnInit, Output ,Input} from '@angular/core';
import { NavigationService,  } from 'src/app/services/navigation.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { ReCaptchaV3Service } from 'ngx-captcha';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() masterName: string;
  // @Output() eventEmitter= new EventEmitter<string>();
  loginForm: FormGroup;
  passResetForm: FormGroup;
  submitted = false;
  loading: boolean = false;
  email: string;
  showData:false;
  headerData:[] ;
  enableLogin:boolean=false;
  captchaData;
  errorMessage:string;

  
  constructor(private loginService: NavigationService, private router: Router, private formBuilder: FormBuilder, private appComponent: AppComponent, private reCaptchaV3Service: ReCaptchaV3Service ) { }

  public resolved(captchResponse: string): void {
    // console.log(`Resolved captcha with response: ${captchResponse}`);
     this.captchaData = captchResponse;
  }
  
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  
  createPassResetForm() {
    this.passResetForm = this.formBuilder.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required],
    });
  }

  enableloginData(){
    // const formData: FormGroup = Object.assign({}, this.loginForm.value);
    // this.loginForm.invalid
    alert(this.enableLogin)
    this.enableLogin=false;

  }

  ngOnInit(): void {
    this.createLoginForm();
    this.createPassResetForm();
    this.loginService.setHeaderData(this.headerData);
    console.log("HeaderData in console", this.headerData);
  }
  handleSuccess(data) {
    console.log(data);
  }

  login() {
    this.appComponent.clickLoader();
    this.submitted = true;
    if (this.captchaData == null) {
      //alert("Please Verify Captcha...")
      this.errorMessage='Please Verify Captcha...';
      return;
    }

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    const formData: FormGroup = Object.assign({}, this.loginForm.value);

    console.log(this.loginForm.value);
    //this.email=this.loginForm.value.email;

    this.loginService.authenticate(formData).subscribe((Response: any) => {
      if (Response.message == 'User is authenticated') {
        // alert("Successfully LoggedIn...");
        //AppComponent.isAutheticated = true;
        this.loading = false;
        sessionStorage.setItem('token', Response.jwt)
        sessionStorage.setItem('userId', Response.userId)
        this.appComponent.showNavData(); 
        
        this.loginService.setHeaderData(Response);
        this.router.navigate(['/apply']);
      } else if (Response.message == 'Password incorrect!' || Response.message == "Email id doesn't match!" || Response.message == "Access Denied") {
        alert("Invalid Username or Password...")
        this.loading = false;
      } else {
        this.loading = false;
        alert("Invalid Username or Password...")
      }
    });
  }
  // login= function() {
  //   this.submitted = true;
  //   if (this.captchaData == null) {
  //     //alert("Please Verify Captcha...")
  //     this.errorMessage='Please Verify Captcha...';
  //     return;
  //   }
  //  if (this.loginForm.invalid) {
  //     return;
  //   }
  //   this.loading = true;
  //   const formData: FormGroup = Object.assign({}, this.loginForm.value);

  //   //console.log(this.loginForm.value);
  //   //this.email=this.loginForm.value.email;

  //   this.loginService.authenticate(formData).subscribe((Response: any) => {
     
  //     this.headerData=Response;
  //     console.log("headerData", this.headerData);
  //     if (Response.message == 'User is authenticated') {
  //       sessionStorage.setItem('token', Response.jwt);
  //       sessionStorage.setItem('userId', Response.userId);
  //       this.appComponent.showNavData(); 
  //       this.loginService.setHeaderData(Response);
  //       alert("Successfully LoggedIn...");
  //       // this.router.navigate(['/apply']);
             
  //       this.router.navigateByUrl('/apply');
  //     } else if (Response.message == 'Password incorrect!' || Response.message == "Email id doesn't match!" || Response.message == "Access Denied") {
  //       alert("Invalid Username or Password...")
  //     } else {
  //       alert("Invalid Username or Password...")
  //     }
  //   });
  // }
 

}

