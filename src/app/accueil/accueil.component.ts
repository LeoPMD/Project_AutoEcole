import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  collapsed = true
  eleve$!: Observable<string>
  enseignant$!: Observable<string>
  reussite$!: Observable<string>
  constructor() { }

  ngOnInit (){
    this.eleve$ = this.afficheNombre(425)
    this.enseignant$ = this.afficheNombre(39)
    this.reussite$ = this.afficheNombre(98)
   }

   afficheNombre(n:number):Observable<string>
   {
     return interval(1).pipe(
       // take(6),
       filter(value => value <= n),
       map(value => ""+value)
     )
   }

}
