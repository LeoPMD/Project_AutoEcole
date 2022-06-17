import { FormateurService } from './../service/formateur.service';
import { Formateur } from './../model/formateur.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  listeFormateur$!: Observable<Formateur[]>

  constructor(private router: Router, private formateurService: FormateurService) { }

  ngOnInit(): void
  {
    this.listeFormateur$ = this.formateurService.getAllFormateur();
  }

  onUpdate(id: number)
  {
    this.router.navigateByUrl("/modifierFormateur/" + id)

  }

  onDelete(id: number)
  {
    this.formateurService.deleteFormateur(id).subscribe()
    this.router.navigate([this.router.url])
  }



}
