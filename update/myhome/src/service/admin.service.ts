import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public adminAPIUrl : string ="https://localhost:7009/api/Admin/";

  constructor(private _http : HttpClient) { }

  PostEmployee(data : any){
    return this._http.post<any>(`${this.adminAPIUrl}add_admin`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  DeleteEmployee(id : number){
    return this._http.delete<any>(`${this.adminAPIUrl}delete_admin/`+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  UpdateEmployee(data : any){
    return this._http.put<any>(`${this.adminAPIUrl}update_admin`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  GetEmployees(){
    return this._http.get<any>(`${this.adminAPIUrl}get_all_admins`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}