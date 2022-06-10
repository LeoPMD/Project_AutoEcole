import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormateurService } from './../service/formateur.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire-modifier-formateur',
  templateUrl: './formulaire-modifier-formateur.component.html',
  styleUrls: ['./formulaire-modifier-formateur.component.css']
})
export class FormulaireModifierFormateurComponent implements OnInit {

  formFormateurUpdate?: FormGroup
  id!: number

  constructor(private router: Router, private formateurService: FormateurService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute)
  {
    this.id = activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void
  {
    this.formateurService.getFormateurById(this.id).subscribe( formateur =>
      {
    this.formFormateurUpdate = this.formBuilder.group
    ({
        id: [formateur.id, [Validators.required]],
        nom : [formateur.nom, [Validators.required]],
        prenom : [formateur.prenom, [Validators.required]],
        dateNaissance : [formateur.dateNaissance, [Validators.required]],
        mail : [formateur.mail, [Validators.required]],
        adresse : [formateur.adresse, [Validators.required]]
      })
     })
  }

  onUpdate()
  {
    this.formateurService.modifierFormateur(this.formFormateurUpdate?.value).subscribe()
    this.router.navigate(['formateur'])
  }

}
