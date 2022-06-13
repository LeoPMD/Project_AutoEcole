
import { FormulaireModifierFormateurComponent } from './formulaire-modifier-formateur/formulaire-modifier-formateur.component';
import { FormulaireAddFormateurComponent } from './formulaire-add-formateur/formulaire-add-formateur.component';
import { FormateurComponent } from './formateur/formateur.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ClientComponent } from './client/client.component';

import { CoursCodeComponent } from './cours-code/cours-code.component';
import { FormulaireCourComponent } from './formulaire-cour/formulaire-cour.component';
import { UpdateCourComponent } from './update-cour/update-cour.component';
import { SeanceCoduiteComponent } from './seance-coduite/seance-coduite.component';

import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { FormulaireClientComponent } from './formulaire-client/formulaire-client.component';
import { ModifierForfaitComponent } from './modifier-forfait/modifier-forfait.component';


const routes: Routes = [
  {path: "vehicule", component: VehiculeComponent},
  {path:"client", component:ClientComponent},
  {path: "formateur", component: FormateurComponent},
  {path: "ajouterFormateur", component: FormulaireAddFormateurComponent},
  {path: "modifierFormateur/:id", component: FormulaireModifierFormateurComponent}

  {path:"CoursCode", component: CoursCodeComponent},
  {path:"addCours", component: FormulaireCourComponent},
  {path:"updateCour/:id", component: UpdateCourComponent},
  {path:"SeanceConduite", component: SeanceCoduiteComponent},

  {path:"modifierClient/:id", component:ModifierClientComponent},
  {path:"ajouterClient",component:FormulaireClientComponent},
  {path:"forfait",component:ForfaitComponent},
  {path:"ajouterForfait",component:FormulaireForfaitComponent},
  {path:"modifierForfait/:id",component:ModifierForfaitComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
