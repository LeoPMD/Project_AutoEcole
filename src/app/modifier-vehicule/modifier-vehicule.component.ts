import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from '../service/vehicule.service';

@Component({
  selector: 'app-modifier-vehicule',
  templateUrl: './modifier-vehicule.component.html',
  styleUrls: ['./modifier-vehicule.component.css']
})
export class ModifierVehiculeComponent implements OnInit {

vehiculeForm?:FormGroup
idDuVehicule!:number

  constructor(private formBuilder:FormBuilder, private router:Router, private vehiculeService:VehiculeService, private activatedRoute:ActivatedRoute) {
    this.idDuVehicule = activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.vehiculeService.getVehiculeById(this.idDuVehicule).subscribe( vehicule => {

      this.vehiculeForm = this.formBuilder.group({
        id: [vehicule.id, [Validators.required]],
        marque: [vehicule.marque, [Validators.required]],
        plaqueImmatriculation: [vehicule.plaqueImmatriculation, [Validators.required]],
        boiteVitesse: [vehicule.boiteVitesse, [Validators.required]]
      })
    })
  }

  onUpdate() {
    this.vehiculeService.modifierVehicule(this.vehiculeForm?.value).subscribe()
    this.router.navigate(["vehicule"])
  }

}
