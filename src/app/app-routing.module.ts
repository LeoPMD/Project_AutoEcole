import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ClientComponent } from './client/client.component';
import { CoursCodeComponent } from './cours-code/cours-code.component';
import { FormulaireCourComponent } from './formulaire-cour/formulaire-cour.component';
import { UpdateCourComponent } from './update-cour/update-cour.component';
import { SeanceCoduiteComponent } from './seance-coduite/seance-coduite.component';
import { FormulaireSeanceComponent } from './formulaire-seance/formulaire-seance.component';

const routes: Routes = [
  {path: "vehicule", component: VehiculeComponent},
  {path:"client", component:ClientComponent},
  {path:"CoursCode", component: CoursCodeComponent},
  {path:"addCours", component: FormulaireCourComponent},
  {path:"updateCour/:id", component: UpdateCourComponent},
  {path:"SeanceConduite", component: SeanceCoduiteComponent},
  {path:"addSeance", component: FormulaireSeanceComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
