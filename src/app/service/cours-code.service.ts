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
    return this.httpClient.get<CoursCode[]>(environment.url + "CoursCode");
  }
  
}
