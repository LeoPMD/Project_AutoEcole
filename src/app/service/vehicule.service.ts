import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicule } from '../model/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private httpClient: HttpClient) { }


  getAllVehicules():Observable<Vehicule[]>
  {
    return this.httpClient.get<Vehicule[]>(environment.url + "vehicule");
  }

  enregistrerVehicule(vehicule:Vehicule):Observable<Vehicule> {
    return this.httpClient.post<Vehicule>(environment.url + "enrVehicule", vehicule)
  }

  supprVehicule(id:number):Observable<void>
  {
    return this.httpClient.delete<void>(environment.url + "supprVehicule/" + id)
  }

  modifierVehicule(vehicule:Vehicule):Observable<Vehicule>{
    return this.httpClient.put<Vehicule>(environment.url + "modifierVehicule/", vehicule)
  }

  getVehiculeById(id:number):Observable<Vehicule>
  {
    return this.httpClient.get<Vehicule>(environment.url + "vehicule/" + id)
  }


}
