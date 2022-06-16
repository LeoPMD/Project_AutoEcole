import { Forfait } from './../model/forfait.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForfaitService } from '../service/forfait.service';

@Component({
  selector: 'app-forfait-client',
  templateUrl: './forfait-client.component.html',
  styleUrls: ['./forfait-client.component.css']
})
export class ForfaitClientComponent implements OnInit {

  listeForfait$!:Observable<Forfait[]>

  constructor(private forfaitService:ForfaitService, private router:Router) { }

  ngOnInit(): void
  {
    this.listeForfait$ = this.forfaitService.getAllForfait()
  }

  inscription(id:number)
  {
    this.router.navigateByUrl("/formulaireClientForfait/" + id)
  }

}
