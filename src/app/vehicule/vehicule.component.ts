import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private vehiculeService: VehiculeService, private router:Router) { }

  ngOnInit(): void {
    this.listeVehicules$ = this.vehiculeService.getAllVehicules();
  }

  onDelete(id:number){
    this.vehiculeService.supprVehicule(id).subscribe();
    this.router.navigate([this.router.url])
  }

  onUpdate(id:number){
    this.router.navigateByUrl("/modifier/" + id)
  }
}
