import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public payapiurl:string ="https://localhost:7009/api/pay/";

  constructor(private http  : HttpClient) { }

  pay(payobj : any){
    return this.http.post<any>(this.payapiurl+"add-pay",payobj);
   }
}
