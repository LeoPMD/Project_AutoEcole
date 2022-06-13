import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursCode } from '../model/cours-code.model';
import { CoursCodeService } from '../service/cours-code.service';

@Component({
  selector: 'app-cours-code',
  templateUrl: './cours-code.component.html',
  styleUrls: ['./cours-code.component.css']
})
export class CoursCodeComponent implements OnInit {

  listeCours$!: Observable<CoursCode[]>
  id!:number

  constructor(private coursCodeService:CoursCodeService, private router:Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.listeCours$=this.coursCodeService.getAllCours()
  }

  onDelete(id:number)
  {
    this.coursCodeService.deleteCour(id).subscribe();
    this.router.navigateByUrl("/CoursCode")
    window.location.reload()
  }

  onUpdate(id:number)
  {
    this.router.navigateByUrl("/updateCour/"+ id)
  }
}
