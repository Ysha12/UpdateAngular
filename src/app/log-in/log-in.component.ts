import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthenService } from '../services/user-authen.service';
import { AdduserService } from '../services/adduser.service';


@Component({templateUrl:'log-in.component.html'})
export class LogInComponent {
  loginForm!:FormGroup;
  loading=false;
  submitted=false;
  error='';

  loginData={
    userName:"",
    userPassword:""
  }
  constructor( private userService: AdduserService, private userAuth: UserAuthenService, private router: Router){}

  login(){

    this.userService.login(this.loginData).subscribe((Response:any)=>{
      console.log(Response.jwtToken);
      console.log(Response.user.role);
  
      this.userAuth.setRoles(Response.user.role);
      this.userAuth.setToken(Response.user.jwtToken);
      console.log(Response);
  
      const role = Response.user.role[0].roleName;
      role  ===  'Admin';
      
      // if(role === 'Admin'){
        // this.toastr.success('You have succefully logged in')
        this.router.navigate(['/home'])
       
      // }else if(role === 'Consultant'){
      //   this.router.navigate(['/home'])
        // this.toastr.success('You have succefully logged in')
  
      // }else{
      //   this.router.navigate(['/home'])
        // this.toastr.success('You have succefully logged in')
      // }
      
    },(error) =>{
      console.log(error);
      if(error.status === 401){
        // this.toastr.error('Incorrect Username or Password');
      }else{
        // this.toastr.error('An error occurred. Please try again later');
      }
    });
  
    }
  //     if(this.authService.userValue){
  //       this.router.navigate(['/']);
  //     }
  //   }

  // ngOnInit() {
  //     this.loginForm=this.formBuilder.group({
  //       username:['',Validators.required],
  //       password:['', Validators.required]
  //     });
  // }

  // get f(){return this.loginForm.controls;}
  // onSubmit(){
  //   this.submitted=true;
  //   if(this.loginForm.invalid){
  //     return;
  //   }
  //   this.loading=true;
  //   this.authService.login.(this.f.username.value, this.f.password.value)
  //   .pipe(first())
  //   .subscribe({
  //     next:()=>{
  //       const returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  //       this.route.navigateByUrl(returnUrl);
  //     },
  //     error: error =>{
  //       this.error=error;
  //       this.loading=false;
  //     }
  //   });
  // }
  
  // formSubmit(){
  //   this.authService.generateToken(this.LoginData).subscribe(
  //     (data:any)=>{
  //       console.log("successful");
  //       console.log(data);
  //     }
  //   )
  // }

  
  // public input: any;

  // constructor(private http: HttpClient, private router: Router) {
  //   this.input = {
  //     'email': '',
  //     'password': ''
  //   };
  //   ngOnInit(): void {
      
  //   }


  // public login() {
  //   if (this.input.email && this.input.password) {
  //     let headers = new HttpHeaders({ 'content-type': 'application/json' });
  //     this.http.post('http://localhost:4200/login', JSON.stringify(this.input), { headers: headers })
  //       .subscribe(result => 
  //         this.router.navigate(['/blogs'], { 'queryParams': result })
  //       );
  //   }
  // }

}
