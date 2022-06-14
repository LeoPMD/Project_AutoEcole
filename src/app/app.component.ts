import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
import { filter, interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project_AutoEcole';
  collapsed = true
  eleve$!: Observable<string>
  enseignant$!: Observable<string>
  reussite$!: Observable<string>

mySubscription;

 constructor(private router: Router, private activatedRoute: ActivatedRoute){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
         // Trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
      }

    });
 }

 ngOnInit (){
  this.eleve$ = this.afficheNombre(425)
  this.enseignant$ = this.afficheNombre(39)
  this.reussite$ = this.afficheNombre(98)
 }

 ngOnDestroy(){
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
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
