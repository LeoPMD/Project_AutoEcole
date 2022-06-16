import { Formateur } from './../model/formateur.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SeanceConduite } from '../model/seance-conduite.model';

@Injectable({
  providedIn: 'root'
})
export class SeanceConduiteService {

  constructor(private httpClient: HttpClient) { }

  getAllSeances():Observable<SeanceConduite[]>
  {
    return this.httpClient.get<SeanceConduite[]>(environment.url + "SeanceConduite")
  }

  ajoutSeance(seance:SeanceConduite):Observable<SeanceConduite>
  {
    console.log(seance.vehicule)
    return this.httpClient.post<SeanceConduite>(environment.url + "saveSeance", seance)
  }

  deleteSeance(id:number):Observable<void>
  {
   return this.httpClient.delete<void>(environment.url + "deleteSeance/" + id);
  }

  updateSeance(seance:SeanceConduite):Observable<SeanceConduite>
  {
   return this.httpClient.put<SeanceConduite>(environment.url + "updateSeance", seance)

  }

  getSeanceById(id:number):Observable<SeanceConduite>
  {
   return this.httpClient.get<SeanceConduite>(environment.url + "SeanceConduite/" + id)

  }

  associerSeance(seance:SeanceConduite,idVehicule:string,idFormateur:string,nomClient:string):Observable<SeanceConduite>
  {
    return this.httpClient.post<SeanceConduite>(environment.url + "associerSeance/" + idVehicule +"/" + idFormateur + "/" + nomClient, seance)
  }

}
