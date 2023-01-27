import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoadingBouncyDotsComponent } from './components/loading-bouncy-dots/loading-bouncy-dots.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingBouncyDotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
