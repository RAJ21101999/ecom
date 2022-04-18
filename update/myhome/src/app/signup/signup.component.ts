import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from  '@angular/forms';

import{Router} from '@angular/router'
import { ApiService } from '../api.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  public signupobj = new UserModel();
  constructor( private  formbuilder :  FormBuilder,private http : HttpClient, private api : ApiService,private router :Router) { }

  ngOnInit(): void {
    this.signupForm  = this.formbuilder.group
    ({
      fullname:['',Validators.required],
      email:['',Validators.required],
    password:['',Validators.required],
    mobile:['',Validators.required],
    usertype:['',Validators.required]
    })
  }
  
  signup(){

    this.signupobj.Fullname = this.signupForm.value.fullname;
    this.signupobj.Username = this.signupForm.value.email;
    this.signupobj.Password = this.signupForm.value.password;
    this.signupobj.Usertype = this.signupForm.value.usertype;
    this.signupobj.Mobile = this.signupForm.value.mobile;


    this.api.signup(this.signupobj)
    .subscribe(res=>{
      alert(res.message);
      this.signupForm.reset();
      this.router.navigate(['home'])
    })
  
    }
  }



