import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/components/sistema/login/login.component';
import { IndexComponent } from './app/components/layout/index/index.component';
import { PessoalistComponent } from './app/components/pessoa/pessoalist/pessoalist.component';
import { PessoadetailsComponent } from './app/components/pessoa/pessoadetails/pessoadetails.component';
import { LivroslistComponent } from './app/components/livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './app/components/livros/livrosdetails/livrosdetails.component';
import { CarroslistComponent } from './app/components/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './app/components/carros/carrosdetails/carrosdetails.component';

const routes: Routes = [
  {path:'', redirectTo: "login", pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'admin', component: IndexComponent, children:[
    {path:'pessoa', component: PessoalistComponent},
    {path:'pessoa/criar', component: PessoadetailsComponent},
    {path:'pessoa/editar', component: PessoadetailsComponent},
  ]},
  {path:'admin', component: IndexComponent, children:[
    {path:'livros', component: LivroslistComponent},
    {path:'livros/criar', component: LivrosdetailsComponent},
    {path:'livros/editar', component: LivrosdetailsComponent},
  ]},
  {path:'admin', component: IndexComponent, children:[
    {path:'carros', component: CarroslistComponent},
    {path:'carros/criar', component: CarrosdetailsComponent},
    {path:'carros/editar', component: CarrosdetailsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
