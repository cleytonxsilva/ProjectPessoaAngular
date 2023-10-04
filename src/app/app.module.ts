import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoalistComponent } from './app/pessoa/pessoalist/pessoalist.component';
import { IndexComponent } from './app/layout/index/index.component';
import { MenusuperiorComponent } from './app/layout/menusuperior/menusuperior.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoalistComponent,
    IndexComponent,
    MenusuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
