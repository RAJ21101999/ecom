import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  public  total :any;

 public productname!: string;
public cartitems: number=0 ;
public productnames: any;

  constructor(private cart :  CartService) { }

  ngOnInit(): void {
    this.total=this.cart.getotalprice();
    this.cart.getproducts().subscribe
    (res=>{
      this.cartitems = res.length;
    })
    this.cart.getproducts().subscribe(res=>{
      this.productnames=res;
     
    })
   
  }

}
