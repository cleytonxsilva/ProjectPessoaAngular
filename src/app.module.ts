import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoalistComponent } from './app/components/pessoa/pessoalist/pessoalist.component';
import { IndexComponent } from './app/components/layout/index/index.component';
import { HeaderComponent } from './app/components/layout/header/header.component';
import { LoginComponent } from './app/components/sistema/login/login.component';
import { FooterComponent } from './app/components/layout/footer/footer.component';
import { PessoadetailsComponent } from './app/components/pessoa/pessoadetails/pessoadetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrosdetailsComponent } from './app/components/carros/carrosdetails/carrosdetails.component';
import { CarroslistComponent } from './app/components/carros/carroslist/carroslist.component';
import { LivrosdetailsComponent } from './app/components/livros/livrosdetails/livrosdetails.component';
import { LivroslistComponent } from './app/components/livros/livroslist/livroslist.component';
import { HttpClientModule } from '@angular/common/http';

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
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
