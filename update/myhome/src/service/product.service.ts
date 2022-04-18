import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productAPIUrl : string ="https://localhost:7009/api/Product/"
  constructor(private http : HttpClient) { }


  Postproduct(data : any){
    return this.http.post<any>(`${this.productAPIUrl}products`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  Deleteproduct(id : number){
    return this.http.delete<any>(`${this.productAPIUrl}delete_product/`+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  Updateproduct(data : any){
    return this.http.put<any>(`${this.productAPIUrl}update_product`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getproduct(){
    return this.http.get<any>(`${this.productAPIUrl}products`)
    .pipe(map((res:any)=>{
      return res;
    }))

    
  }
  getproduct1(){
    return this.http.get<any>(`${this.productAPIUrl}get_all_products`)
    .pipe(map((res:any)=>{
      return res;
    }))



}
}
