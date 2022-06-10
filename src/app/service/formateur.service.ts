import { environment } from 'src/environments/environment';
import { Formateur } from './../model/formateur.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private httpClient: HttpClient) { }

  getAllFormateur(): Observable<Formateur[]>
  {
    return this.httpClient.get<Formateur[]>(environment.url + "formateur");
  }

  ajouterFormateur(formateur: Formateur): Observable<Formateur>
  {
    return this.httpClient.post<Formateur>(environment.url + "saveFormateur", formateur)
  }

  deleteFormateur(id:number):Observable<void>
 {
  return this.httpClient.delete<void>(environment.url + "deleteFormateur/" + id)
 }

 modifierFormateur(formateur: Formateur): Observable<Formateur>
 {
  return this.httpClient.put<Formateur>(environment.url + "updateFormateur", formateur)
 }

 getFormateurById(id: number): Observable<Formateur>
 {
  return this.httpClient.get<Formateur>(environment.url + "getFormateur/" + id)
 }

}
