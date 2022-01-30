import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import {MatCardModule} from '@angular/material/card';
// import { SwipeCardsModule } from 'ng2-swipe-cards';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MDBBootstrapModulesPro.forRoot(),
    // SwipeCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
