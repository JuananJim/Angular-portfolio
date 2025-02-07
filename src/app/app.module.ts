import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortfolioComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
