import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ClientComponent } from './client/client.component';
import { EnregistrerVehiculeComponent } from './enregistrer-vehicule/enregistrer-vehicule.component';
import { ModifierVehiculeComponent } from './modifier-vehicule/modifier-vehicule.component';

const routes: Routes = [
  {path: "vehicule", component: VehiculeComponent},
  {path:"client", component:ClientComponent},
  {path:"enrVehicule", component:EnregistrerVehiculeComponent},
  {path:"modifier/:id", component:ModifierVehiculeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
