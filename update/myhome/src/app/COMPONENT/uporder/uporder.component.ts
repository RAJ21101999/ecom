import { Component, OnInit } from '@angular/core';


import { CartService } from 'src/service/cart.service';
import { ApiService } from 'src/app/api.service';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/order.model';
import { OrderService } from 'src/service/order.service';
import { PayModel } from 'src/app/pay.model';
import { PaymentService } from 'src/service/payment.service';




@Component({
  selector: 'app-uporder',
  templateUrl: './uporder.component.html',
  styleUrls: ['./uporder.component.css'],
  providers:[DatePipe]
})
export class UporderComponent implements OnInit {

  public orderupForm !: FormGroup;
  public payForm !: FormGroup;
  public payobj = new PayModel();
  public orderupobj = new OrderModel();
public  total :any;

 public productname!: string;
public cartitems: number=0 ;
public productnames: any;
public products: any;
  mydate : Date = new Date();
index:number =401;
 

  constructor( private cart :  CartService,private api : ApiService,private datePipe :DatePipe, private  formbuilder :  FormBuilder,private http : HttpClient,private router :Router,private ordersapi : OrderService ,private payapi : PaymentService) {


  
  }

  ngOnInit(): void {
 
    this.total=this.cart.getotalprice();
    this.cart.getproducts().subscribe
    (res=>{
      this.cartitems = res.length;
    })
    this.cart.getproducts().subscribe(res=>{
      this.productnames=res;
     
    })

this.products=this.cart.getitle();
    
   


   

    this.orderupForm = this.formbuilder.group(
      {
        firstname:[''],
        lastname:[''],
        address:[''],
        number:[''],
        email:['']

      }
    )
      this.payForm = this.formbuilder.group(
        {
          cardholdername:[''],
          cardnumber:[''],
          expirydate:[''],
           cvv:[''] 

        }
      )


    

}

orderup(){

  this.orderupobj.firstname = this.orderupForm.value.firstname;
  this.orderupobj.lastname = this.orderupForm.value.lastname;
  this.orderupobj.address = this.orderupForm.value.address;
  this.orderupobj.number = this.orderupForm.value.number;
  this.orderupobj.email = this.orderupForm.value.email;
  this.orderupobj.ordername=this.products;
  this.orderupobj.orderprice=this.total;
  this.orderupobj.orderquantity=this.cartitems;


  this.ordersapi.orderup(this.orderupobj)
  .subscribe(res=>{
     alert(res.message);
    this.orderupForm.reset();
    //this.router.navigate(['product'])
  })
}
  Payment(){

    this.payobj.cardholdername = this.payForm.value.cardholdername;
    this.payobj.cardnumber = this.payForm.value.cardnumber;
    this.payobj.expirydate=this.payForm.value.expirydate;
    this.payobj.cvv=this.payForm.value.cvv;


    this.payapi.pay(this.payobj).subscribe(res=>{
      alert(res.message);
      let ref= document.getElementById('cancel')
      ref?.click();
      this.payForm.reset();
      this.router.navigate(['bill'])

  })
}
}



