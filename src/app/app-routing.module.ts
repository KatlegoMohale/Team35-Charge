
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserTypeComponent } from './components/user-type/user-type.component';
import { UserTypeCreateComponent } from './components/user-type/user-type-create/user-type-create.component';
import { UserTypeListComponent } from './components/user-type/user-type-list/user-type-list.component';
import { UserTypeUpdateComponent } from './components/user-type/user-type-update/user-type-update.component';


const routes: Routes = [
  { path: '', redirectTo: 'usertypes', pathMatch: 'full' },
  { path: 'usertypes', component: UserTypeListComponent },
  { path: 'updateUsertype/:id', component: UserTypeUpdateComponent },
  { path: 'createUserType', component: UserTypeCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
