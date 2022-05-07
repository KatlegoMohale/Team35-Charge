import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTypeListComponent } from './components/user-type/user-type-list/user-type-list.component';
import { UserTypeCreateComponent } from './components/user-type/user-type-create/user-type-create.component';
import { UserTypeUpdateComponent } from './components/user-type/user-type-update/user-type-update.component';
import { UserTypeService } from './services/user-type.service';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserTypeComponent } from './components/user-type/user-type.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    UserTypeListComponent,
    UserTypeCreateComponent,
    UserTypeUpdateComponent,
    UserTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [UserTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
