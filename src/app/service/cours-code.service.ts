import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursCode } from '../model/cours-code.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursCodeService {

  constructor(private httpClient: HttpClient) { }

  getAllCours():Observable<CoursCode[]>
  {
    return this.httpClient.get<CoursCode[]>(environment.url + "CoursCode")
  }
  
  ajoutCour(cours:CoursCode):Observable<CoursCode>
  {
   return this.httpClient.post<CoursCode>(environment.url + "saveCour", cours)
  }

  deleteCour(id:number):Observable<void>
  {
   return this.httpClient.delete<void>(environment.url + "deleteCour/" + id);
  }

  updateCour(cours:CoursCode):Observable<CoursCode>
  {
   return this.httpClient.put<CoursCode>(environment.url + "updateCour", cours)

  }

  getCoursById(id:number):Observable<CoursCode>
  {
   return this.httpClient.get<CoursCode>(environment.url + "CoursCode/" + id)

  }


}
