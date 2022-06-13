import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ClientComponent } from './client/client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { FormulaireClientComponent } from './formulaire-client/formulaire-client.component';
import { ModifierForfaitComponent } from './modifier-forfait/modifier-forfait.component';

const routes: Routes = [
  {path: "vehicule", component: VehiculeComponent},
  {path:"client", component:ClientComponent},
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
