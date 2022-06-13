import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculeService } from '../service/vehicule.service';

@Component({
  selector: 'app-enregistrer-vehicule',
  templateUrl: './enregistrer-vehicule.component.html',
  styleUrls: ['./enregistrer-vehicule.component.css']
})
export class EnregistrerVehiculeComponent implements OnInit {

  vehiculeEnr!:FormGroup

  constructor(private formBuilder : FormBuilder, private router:Router, private vehiculeService: VehiculeService) { }

  ngOnInit(): void {
    this.vehiculeEnr = this.formBuilder.group({
      marque: [null, [Validators.required]],
      plaqueImmatriculation: [null, [Validators.required]],
      boiteVitesse: [null, [Validators.required]]
    })
  }

  onSave(){
    this.vehiculeService.enregistrerVehicule(this.vehiculeEnr.value).subscribe()
    this.router.navigate(["vehicule"])
  }

}
