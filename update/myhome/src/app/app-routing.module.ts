import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/service/auth.guard';
import { AdminComponent } from './COMPONENT/admin/admin.component';
import { BillComponent } from './COMPONENT/bill/bill.component';
import { CartComponent } from './COMPONENT/cart/cart.component';
import { HomeComponent } from './COMPONENT/home/home.component';
import { ParentadminComponent } from './COMPONENT/parentadmin/parentadmin.component';
import { ProducctadminComponent } from './COMPONENT/producctadmin/producctadmin.component';
import { ProductComponent } from './COMPONENT/product/product.component';
import { UporderComponent } from './COMPONENT/uporder/uporder.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
{path:'product',component:ProductComponent,canActivate:[AuthGuard]},
{path:'cart', component:CartComponent,canActivate:[AuthGuard]},

  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'uporder',component:UporderComponent
  },
  {
    path:'bill',component:BillComponent
  },
  {
    path:'parentadmin',component: ParentadminComponent,canActivate:[AuthGuard],
    children:[
      {path:'admin',component: AdminComponent},
      {path:'productadmin',component: ProducctadminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
