import { ForfaitService } from './../service/forfait.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Forfait } from '../model/forfait.model';

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css']
})
export class ForfaitComponent implements OnInit {

  constructor(private forfaitService:ForfaitService, private router:Router) {

  }

  listeForfait$!:Observable<Forfait[]>

  ngOnInit(): void {
    this.listeForfait$ = this.forfaitService.getAllForfait()
  }

  onSave()
  {
    this.router.navigateByUrl("/ajouterForfait")
  }

  onDelete(id:number)
  {
    this.forfaitService.supprimerForfait(id).subscribe()
    this.router.navigate([this.router.url])
  }

  onUpdate(id:number)
  {
    this.router.navigateByUrl("/modifierForfait/"+id)
  }
}
