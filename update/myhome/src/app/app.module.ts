import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from  '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './COMPONENT/cart/cart.component';
import { HeaderComponent } from './COMPONENT/header/header.component';
import { HomeComponent } from './COMPONENT/home/home.component';
import { ProductComponent } from './COMPONENT/product/product.component';
import { FilterPipe } from './shared/filter.pipe';
import { UporderComponent } from './COMPONENT/uporder/uporder.component';
import { BillComponent } from './COMPONENT/bill/bill.component';
import { AdminComponent } from './COMPONENT/admin/admin.component';
import { ParentadminComponent } from './COMPONENT/parentadmin/parentadmin.component';
import { ProducctadminComponent } from './COMPONENT/producctadmin/producctadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    FilterPipe,
    UporderComponent,
    BillComponent,
    AdminComponent,
    ParentadminComponent,
    ProducctadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
