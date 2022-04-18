import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   totalcartitem : any= 0;
   public searchterm :string ='';
  constructor(private cart  :CartService) { }

  ngOnInit(): void {
    this.cart.getproducts().subscribe
    (res=>{
      this.totalcartitem = res.length;
    })
  }
search(event:any){
  this.searchterm=(event.target  as  HTMLInputElement).value;
  this.cart.search.next(this.searchterm);
  
}

}
