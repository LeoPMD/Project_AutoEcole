import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ClientComponent } from './client/client.component';
import { CoursCodeComponent } from './cours-code/cours-code.component';

const routes: Routes = [
  {path: "vehicule", component: VehiculeComponent},
  {path:"client", component:ClientComponent},
  {path:"CoursCode", component: CoursCodeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
