import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public orderapiurl:string ="https://localhost:7009/api/order/";

  constructor(private http  : HttpClient ) { 


   
  }
  orderup( orderobj : any){
    return this.http.post<any>(this.orderapiurl+"add-order",orderobj);
   }
}
