import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Formateur } from '../model/formateur.model';
import { SeanceConduite } from '../model/seance-conduite.model';
import { Vehicule } from '../model/vehicule.model';
import { FormateurService } from '../service/formateur.service';
import { SeanceConduiteService } from '../service/seance-conduite.service';
import { VehiculeService } from '../service/vehicule.service';

@Component({
  selector: 'app-formulaire-seance',
  templateUrl: './formulaire-seance.component.html',
  styleUrls: ['./formulaire-seance.component.css']
})
export class FormulaireSeanceComponent implements OnInit {

  seanceForm!: FormGroup
  otherForm!: FormGroup
  listeSeances$!: Observable<SeanceConduite[]>
  listeVehicules$!: Observable<Vehicule[]>
  listeFormateurs$!:Observable<Formateur[]>

  seancePreview$!:Observable<SeanceConduite>

  constructor(private formBuilder: FormBuilder, private router: Router, private seanceConduiteService: SeanceConduiteService, private vehiculeService: VehiculeService, private formateurService:FormateurService) { }

  ngOnInit(): void {
    this.listeSeances$=this.seanceConduiteService.getAllSeances()
    this.listeVehicules$=this.vehiculeService.getAllVehicules()
    this.listeFormateurs$=this.formateurService.getAllFormateur()
    this.seanceForm=this.formBuilder.group({
      dateSeance:[null, [Validators.required]],
      heureDebutSeance:[null, [Validators.required]],
      heureFinSeance:[null, [Validators.required]]
      })
    this.otherForm = this.formBuilder.group({
        vehicule:[null, [Validators.required]],
        formateur:[null, [Validators.required]]
      })
  }


  onSave()
  {
    console.log(this.seanceForm.value)
    console.log(this.otherForm.value)
    this.seanceConduiteService.associerSeance(this.seanceForm.value,this.otherForm.value.vehicule,this.otherForm.value.formateur).subscribe()
    this.router.navigate(["SeanceConduite"])
  }

  ConvertStringToNumber(input: string) {
    var numeric = Number(input);
    return numeric;
  }

}
