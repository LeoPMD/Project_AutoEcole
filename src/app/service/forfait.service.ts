import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forfait } from '../model/forfait.model';

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {

  constructor(private httpClient:HttpClient) { }

  getAllForfait():Observable<Forfait[]>
  {
    return this.httpClient.get<Forfait[]>(environment.url + "forfaits")
  }

  getForfaitById(id:number):Observable<Forfait>
  {
    return this.httpClient.get<Forfait>(environment.url + "forfait/" + id)
  }

  ajouterForfait(forfait:Forfait):Observable<Forfait>
  {
    return this.httpClient.post<Forfait>(environment.url + "saveForfait",forfait)
  }

  supprimerForfait(id:number):Observable<void>
  {
    return this.httpClient.delete<void>(environment.url + "deleteForfait/" + id)
  }

  updateForfait(forfait:Forfait):Observable<Forfait>
  {
    return this.httpClient.put<Forfait>(environment.url + "updateForfait",forfait)
  }
}
