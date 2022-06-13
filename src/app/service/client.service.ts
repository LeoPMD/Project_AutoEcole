import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient:HttpClient) { }

  getAllClient():Observable<Client[]>
  {
    return this.httpClient.get<Client[]>(environment.url + "clients")
  }

  ajoutClient(client:Client):Observable<Client>
  {
    return this.httpClient.post<Client>(environment.url + "saveClient",client)
  }

  supprimerClient(id:number):Observable<void>
  {
    return this.httpClient.delete<void>(environment.url + "deleteClient/" + id)
  }

  updateClient(client:Client):Observable<Client>
  {
    return this.httpClient.put<Client>(environment.url + "updateClient", client)
  }

  getClientById(id:number):Observable<Client>
  {
    return this.httpClient.get<Client>(environment.url+"client/"+id)
  }
}
