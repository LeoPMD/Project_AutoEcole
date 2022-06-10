import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicule } from '../model/vehicule.model';
import { VehiculeService } from '../service/vehicule.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {

listeVehicules$!:Observable<Vehicule[]>

  constructor(private vehiculeService: VehiculeService) { }

  ngOnInit(): void {
    this.listeVehicules$ = this.vehiculeService.getAllVehicules();
  }

}
