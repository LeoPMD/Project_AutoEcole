import { FormateurService } from './../service/formateur.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-add-formateur',
  templateUrl: './formulaire-add-formateur.component.html',
  styleUrls: ['./formulaire-add-formateur.component.css']
})
export class FormulaireAddFormateurComponent implements OnInit {

  formFormateurAdd!: FormGroup

  constructor(private router: Router, private formateurService: FormateurService, private formBuilder: FormBuilder) { }

  ngOnInit(): void
  {
    this.formFormateurAdd = this.formBuilder.group(
      {
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      dateNaissance: [null, [Validators.required]],
      mail: [null, [Validators.required]],
      adresse: [null, [Validators.required]]
    })
  }

  onSave()
  {
    this.formateurService.ajouterFormateur(this.formFormateurAdd.value).subscribe()
    this.router.navigate(["formateur"]);
  }

}
