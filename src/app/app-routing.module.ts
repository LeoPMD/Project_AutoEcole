import { FormateurComponent } from './formateur/formateur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {path: "vehicule", component: VehiculeComponent},
  {path:"client", component:ClientComponent},
  {path: "formateur", component: FormateurComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
