import { FormateurComponent } from './formateur/formateur.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ClientComponent } from './client/client.component';
import { EnregistrerVehiculeComponent } from './enregistrer-vehicule/enregistrer-vehicule.component';
import { ModifierVehiculeComponent } from './modifier-vehicule/modifier-vehicule.component';
import { FormulaireAddFormateurComponent } from './formulaire-add-formateur/formulaire-add-formateur.component';
import { FormulaireModifierFormateurComponent } from './formulaire-modifier-formateur/formulaire-modifier-formateur.component';
import { CoursCodeComponent } from './cours-code/cours-code.component';
import { FormulaireCourComponent } from './formulaire-cour/formulaire-cour.component';
import { UpdateCourComponent } from './update-cour/update-cour.component';
import { SeanceCoduiteComponent } from './seance-coduite/seance-coduite.component';
import { FormulaireSeanceComponent } from './formulaire-seance/formulaire-seance.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { FormulaireClientComponent } from './formulaire-client/formulaire-client.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { ModifierForfaitComponent } from './modifier-forfait/modifier-forfait.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizCodeComponent } from './quiz-code/quiz-code.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    VehiculeComponent,
    EnregistrerVehiculeComponent,
    ModifierVehiculeComponent,
    FormateurComponent,
    FormulaireAddFormateurComponent,
    FormulaireModifierFormateurComponent,
    CoursCodeComponent,
    FormulaireCourComponent,
    UpdateCourComponent,
    SeanceCoduiteComponent,
    FormulaireSeanceComponent,
    ModifierClientComponent,
    FormulaireClientComponent,
    ForfaitComponent,
    FormulaireForfaitComponent,
    ModifierForfaitComponent,
    AccueilComponent,
    QuizCodeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
