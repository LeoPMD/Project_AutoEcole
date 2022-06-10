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

}
