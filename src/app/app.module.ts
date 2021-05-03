import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AjoutTacheComponent } from './ajout-tache/ajout-tache.component';
import { ModifTacheComponent } from './modif-tache/modif-tache.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutTacheComponent,
    ModifTacheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
