import { FormulaireCLientForfaitComponent } from './formulaire-client-forfait/formulaire-client-forfait.component';
import { ForfaitClientComponent } from './forfait-client/forfait-client.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';

import { FormulaireModifierFormateurComponent } from './formulaire-modifier-formateur/formulaire-modifier-formateur.component';
import { FormulaireAddFormateurComponent } from './formulaire-add-formateur/formulaire-add-formateur.component';
import { FormateurComponent } from './formateur/formateur.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ClientComponent } from './client/client.component';
import { EnregistrerVehiculeComponent } from './enregistrer-vehicule/enregistrer-vehicule.component';
import { ModifierVehiculeComponent } from './modifier-vehicule/modifier-vehicule.component';

import { CoursCodeComponent } from './cours-code/cours-code.component';
import { FormulaireCourComponent } from './formulaire-cour/formulaire-cour.component';
import { UpdateCourComponent } from './update-cour/update-cour.component';
import { SeanceCoduiteComponent } from './seance-coduite/seance-coduite.component';
import { FormulaireSeanceComponent } from './formulaire-seance/formulaire-seance.component';

import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { FormulaireClientComponent } from './formulaire-client/formulaire-client.component';
import { ModifierForfaitComponent } from './modifier-forfait/modifier-forfait.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { PresentationFormateursComponent } from './presentation-formateurs/presentation-formateurs.component';



const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  {path: "", redirectTo : "/accueil", pathMatch: "full"},
  {path: "vehicule", component: VehiculeComponent},
  {path:"client", component:ClientComponent},
  {path:"enrVehicule", component:EnregistrerVehiculeComponent},
  {path:"modifier/:id", component:ModifierVehiculeComponent},
  {path: "formateur", component: FormateurComponent},
  {path: "ajouterFormateur", component: FormulaireAddFormateurComponent},
  {path: "modifierFormateur/:id", component: FormulaireModifierFormateurComponent},
  {path:"CoursCode", component: CoursCodeComponent},
  {path:"addCours", component: FormulaireCourComponent},
  {path:"updateCour/:id", component: UpdateCourComponent},
  {path:"SeanceConduite", component: SeanceCoduiteComponent},
  {path:"addSeance", component: FormulaireSeanceComponent},
  {path:"modifierClient/:id", component:ModifierClientComponent},
  {path:"ajouterClient",component:FormulaireClientComponent},
  {path:"forfait",component:ForfaitComponent},
  {path:"ajouterForfait",component:FormulaireForfaitComponent},
  {path:"modifierForfait/:id",component:ModifierForfaitComponent},
  {path:"menuadmin",component:MenuAdminComponent},
  {path:"presentationFormateur", component: PresentationFormateursComponent},
  {path: "forfaitClient", component: ForfaitClientComponent},
  {path: "formulaireClientForfait/:id", component: FormulaireCLientForfaitComponent},
  {path:"menuadmin",component:MenuAdminComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
