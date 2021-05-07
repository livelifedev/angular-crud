import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CreaturesService } from './shared/services/creatures.service';
import { CreaturesModule } from './creatures/creatures.module';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CreaturesModule,
    AppRoutingModule,
  ],
  providers: [CreaturesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
