import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForfaitService } from '../service/forfait.service';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {

  ForfaitForm!: FormGroup

  constructor(private formBuilder:FormBuilder, private forfaitService:ForfaitService, private router:Router) { }

  ngOnInit(): void {
    this.ForfaitForm = this.formBuilder.group({
      nom: [null,[Validators.required]],
      montant: [null,[Validators.required]],
      contenu: [null,[Validators.required]]
    })
  }

  onSubmit()
  {
    this.forfaitService.ajouterForfait(this.ForfaitForm.value).subscribe()
    this.router.navigate(["forfait"])
  }
}
