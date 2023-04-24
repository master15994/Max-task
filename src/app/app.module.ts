import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvideComponent } from './componets/provide/provide.component';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './core/service/service';
@NgModule({
  declarations: [AppComponent, ProvideComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
