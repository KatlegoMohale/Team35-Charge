import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTypeService } from 'src/app/services/user-type.service';
import { Usertype } from 'src/app/shared/usertype';

@Component({
  selector: 'app-user-type-list',
  templateUrl: './user-type-list.component.html',
  styleUrls: ['./user-type-list.component.css']
})
export class UserTypeListComponent implements OnInit {
  usertypes: Usertype[] = []

  // currentUserType = null;
  // currentIndex = -1;
  // name = '';

  constructor(private usertypeService: UserTypeService, private router: Router) { }

  ngOnInit(): void {
    this.getUserTypes();

  }

  getUserTypes(){
    this.usertypeService.getUserTypes().subscribe(usertypes => { 
      this.usertypes = usertypes;
      console.log(usertypes);
   });

  // searchUserType(): void {
  //   this.usertypeService.searchUserType(this.name).subscribe( usertypes => {
  //       this.usertypes = usertypes;
  //       console.log(usertypes);
  //   },
  //   error => {
  //       console.log(error);
  //   });
  // }
  
    // update(id, data): Observable<any> {
    //   return this.httpClient.put(`${baseURL}/${id}`, data);
    // }
  
    // delete(id): Observable<any> {
    //   return this.httpClient.delete(`${baseURL}/${id}`);
    // }
  
  // refresh(): void {
  //   this.usertypes();
  //   this.currentUserType = null;
  //   this.currentIndex = -1;
  // }

  // setCurrentUserType(usertype, index): void {
  //   this.currentUserType = usertype;
  //   this.currentIndex = index;
  // }

  // deleteUsertypes(id): void {
  //   this.usertypeService.delete().subscribe(
  //     response => {
  //       console.log(response);
  //       this.readUserTypes();
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

}}
