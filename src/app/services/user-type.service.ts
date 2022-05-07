import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
readonly APIURL = 'http://localhost:49814/api';

  constructor(private httpClient: HttpClient) { }

  getUserTypes(): Observable<any[]> {
    return this.httpClient.get<any>(this.APIURL+'/UserType/GetUserTypes');
  }

  createUserType(data: any){
    return this.httpClient.post(this.APIURL+'/UserType/CreateUserType', data);
  }

  UpdateUserType(data: any){
    return this.httpClient.put(this.APIURL+'UserType/UpdateUserType', data);
  }

  DeleteUserType(id: any){
    return this.httpClient.delete(this.APIURL+'UserType/DeleteUserType'+id);
  }

  // searchUserType(name): Observable<any> {
  //   return this.httpClient.get(`${baseURL}?name=${name}`);
  // }

}
