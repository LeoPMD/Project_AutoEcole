import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeanceConduite } from '../model/seance-conduite.model';
import { SeanceConduiteService } from '../service/seance-conduite.service';

@Component({
  selector: 'app-seance-coduite',
  templateUrl: './seance-coduite.component.html',
  styleUrls: ['./seance-coduite.component.css']
})
export class SeanceCoduiteComponent implements OnInit {

  listeSeances$!: Observable<SeanceConduite[]>

  constructor(private seanceConduiteService:SeanceConduiteService, private router:Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.listeSeances$=this.seanceConduiteService.getAllSeances()
  }

  onDelete(id:number)
  {
    this.seanceConduiteService.deleteSeance(id).subscribe()
    this.router.navigate([this.router.url])
  }
}
