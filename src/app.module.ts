import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoalistComponent } from './app/pessoa/pessoalist/pessoalist.component';
import { IndexComponent } from './app/layout/index/index.component';
import { HeaderComponent } from './app/layout/header/header.component';
import { LoginComponent } from './app/sistema/login/login.component';
import { FooterComponent } from './app/layout/footer/footer.component';
import { PessoadetailsComponent } from './app/pessoa/pessoadetails/pessoadetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrosdetailsComponent } from './app/carros/carrosdetails/carrosdetails.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { LivrosdetailsComponent } from './app/livros/livrosdetails/livrosdetails.component';
import { LivroslistComponent } from './app/livros/livroslist/livroslist.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoalistComponent,
    IndexComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    PessoadetailsComponent,
    CarrosdetailsComponent,
    CarroslistComponent,
    LivrosdetailsComponent,
    LivroslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
