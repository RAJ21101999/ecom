import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productlist:any;
  searchkey:string="";
  public filtercategory:any;

  constructor(private api :ProductService, private cart  :  CartService) { }


  ngOnInit(): void {
    this.api.getproduct()

    .subscribe(res=>{
      this.productlist =res;
      this.filtercategory=res;

      this.productlist.forEach((a:any) => {
        if(a.category === "women's  clothing"  || a.category === "men's clothing"){
          a.category ="fashion";
        }
        Object.assign(a,{quantity:1,total:a.price});
        

        
      });
   
       
    });

    this.cart.search.subscribe((val:any)=>{
      this.searchkey =val;
    })
  }
  addtocart(item:any)
  {
this.cart.addtocart(item);
  }
filter(category:string){
  this.filtercategory = this.productlist
  .filter((a:any)=>{
    if(a.category == category ||  category == ''){
      return a;
    }
  })


}


}
