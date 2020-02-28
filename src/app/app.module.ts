import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MaterialModule} from './material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    NavigationComponent,
    ButtonsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonToggleModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
