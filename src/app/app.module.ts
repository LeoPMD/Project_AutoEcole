
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ClientComponent } from './client/client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { FormulaireClientComponent } from './formulaire-client/formulaire-client.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculeComponent,
    ClientComponent,
    ModifierClientComponent,
    FormulaireClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
