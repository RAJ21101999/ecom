import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from  '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public name : any;
  public loginForm !: FormGroup;
  public  loginobj = new   UserModel();
  constructor( private  formbuilder :  FormBuilder,private http  :  HttpClient,private router:  Router,private api : ApiService) { }

  ngOnInit(): void {

    this.loginForm  = this.formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

 
 public login(){
    this.loginobj.Username = this.loginForm.value.email;
    this.loginobj.Password = this.loginForm.value.password;
    this.api.login(this.loginobj)
    .subscribe(res=>{
      alert(res.message);
      console.log(res);
      this.name = res.userType;
      this.loginForm.reset();
     
    localStorage.setItem('token',res.jwtToken);
    if(res.message === "User not Found"){
          this.router.navigate(['/home'])
       }
           else{
           this.router.navigate(['/product'])
 }
  })

}




}
