import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms'; // Need to manually import forms metadata for input editing

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent // this was auto-generated when 'ng generate component heroes' was run
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
