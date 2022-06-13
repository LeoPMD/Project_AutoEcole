import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForfaitService } from '../service/forfait.service';

@Component({
  selector: 'app-modifier-forfait',
  templateUrl: './modifier-forfait.component.html',
  styleUrls: ['./modifier-forfait.component.css']
})
export class ModifierForfaitComponent implements OnInit {

  ForfaitForm?:FormGroup
  idForfait!:number

  constructor(private formBuilder:FormBuilder, private forfaitService:ForfaitService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.idForfait = activatedRoute.snapshot.params["id"]
   }

  ngOnInit(): void {
    this.forfaitService.getForfaitById(this.idForfait).subscribe( forfait => {
      this.ForfaitForm = this.formBuilder.group({
        id: [forfait.id,[Validators.required]],
        nom: [forfait.nom, [Validators.required]],
        montant: [forfait.montant, [Validators.required]],
        contenu: [forfait.contenu, [Validators.required]]
      })
    })
  }

  onUpdate()
  {
    this.forfaitService.updateForfait(this.ForfaitForm?.value).subscribe()
    this.router.navigate(["forfait"])
  }

}
