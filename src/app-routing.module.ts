import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/sistema/login/login.component';
import { IndexComponent } from './app/layout/index/index.component';
import { PessoalistComponent } from './app/pessoa/pessoalist/pessoalist.component';
import { PessoadetailsComponent } from './app/pessoa/pessoadetails/pessoadetails.component';

const routes: Routes = [
  {path:'', redirectTo: "login", pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'admin', component: IndexComponent, children:[
    {path:'pessoa', component: PessoalistComponent},
    {path:'pessoa/criar', component: PessoadetailsComponent},
    {path:'pessoa/editar', component: PessoadetailsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
