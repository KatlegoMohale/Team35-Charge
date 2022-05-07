import { Usertype } from '../../../shared/usertype';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserTypeService } from 'src/app/services/user-type.service';

import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors} from '@angular/forms';




@Component({
  selector: 'app-user-type-create',
  templateUrl: './user-type-create.component.html',
  styleUrls: ['./user-type-create.component.css']
})
export class UserTypeCreateComponent implements OnInit {
  newusertype: Usertype[] = []
  newUserTypeForm! : FormGroup;
  isSubmitted : boolean = false;

  constructor(private usertypeService: UserTypeService, private router: Router, private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.newUserTypeForm = this.formbuilder.group(
      {
        UserTypeNameControl : ['', this.nonEmptyName],
        UserTypeDescriptionControl : ['', [Validators.required, Validators.composeAsync]]
      }
    );
  }

AddUserType(submittedForm : FormGroup){

  () {
    this.isSubmitted = true;
    if (!submittedForm.invalid) {
      this.router.navigate([RouteInfo.UPLOADID]);
    }



    this.newusertype = submittedData;
    this.createUserType(submittedData);
    
  }

//  createUserType(data): Observable<any> {
//    this.usertypeService.post(data);
//   }

}

