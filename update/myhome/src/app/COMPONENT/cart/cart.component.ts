
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   public product : any =  [];
   public grandtotal  !:  number;
    constructor(private  cart  : CartService) { }

  ngOnInit(): void {
    this.cart.getproducts().subscribe(res=>{
      this.product=res;
      this.grandtotal=this.cart.getotalprice();
    })
   

    }
    removeitem(item : any){
      this.cart.removecartitem(item);
  }
  emptycart(){
    this.cart. removeallcart()
  }

}
