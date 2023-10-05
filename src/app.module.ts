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

@NgModule({
  declarations: [
    AppComponent,
    PessoalistComponent,
    IndexComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    PessoadetailsComponent
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
