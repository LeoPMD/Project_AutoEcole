import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeanceConduite } from '../model/seance-conduite.model';
import { Vehicule } from '../model/vehicule.model';
import { SeanceConduiteService } from '../service/seance-conduite.service';
import { VehiculeService } from '../service/vehicule.service';

@Component({
  selector: 'app-formulaire-seance',
  templateUrl: './formulaire-seance.component.html',
  styleUrls: ['./formulaire-seance.component.css']
})
export class FormulaireSeanceComponent implements OnInit {

  seanceForm!: FormGroup
  listeSeances$!: Observable<SeanceConduite[]>
  listeVehicules$!: Observable<Vehicule[]>

  constructor(private formBuilder: FormBuilder, private router: Router, private seanceConduiteService: SeanceConduiteService, private vehiculeService: VehiculeService) { }

  ngOnInit(): void {
    this.listeSeances$=this.seanceConduiteService.getAllSeances()
    this.listeVehicules$=this.vehiculeService.getAllVehicules()
    this.listeSeances$=this.seanceConduiteService.getAllSeances()
    this.seanceForm=this.formBuilder.group({
      dateSeance:[null, [Validators.required]],
      heureDebutSeance:[null, [Validators.required]],
      heureFinSeance:[null, [Validators.required]],
      vehicule:[null, [Validators.required]],
      formateur:[null, [Validators.required]],
      })


  
  }


  onSave()
  {
    this.seanceConduiteService.ajoutSeance(this.seanceForm.value).subscribe()
    this.router.navigate(["SeanceConduite"])
  }

}
