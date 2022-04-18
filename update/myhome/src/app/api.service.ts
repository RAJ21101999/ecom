import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public loginapiurl:string = "https://localhost:7009/api/Login/";
  constructor( private http  : HttpClient) { }

  signup(empobj : any){
    return this.http.post<any>(this.loginapiurl+"signup",empobj)
  }
  login(empobj  :  any ){
    return this.http.post<any>(this.loginapiurl+"login",empobj)
  }


}
