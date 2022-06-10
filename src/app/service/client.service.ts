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
}
