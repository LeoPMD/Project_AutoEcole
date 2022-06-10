import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ClientComponent } from './client/client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { FormulaireClientComponent } from './formulaire-client/formulaire-client.component';

const routes: Routes = [
  {path: "vehicule", component: VehiculeComponent},
  {path:"client", component:ClientComponent},
  {path:"modifierClient/:id", component:ModifierClientComponent},
  {path:"ajouterClient",component:FormulaireClientComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
