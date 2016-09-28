import { NgModule, enableProdMode }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

enableProdMode();

@NgModule({
  imports: [ BrowserModule],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ Title]
})
export class AppModule { }
