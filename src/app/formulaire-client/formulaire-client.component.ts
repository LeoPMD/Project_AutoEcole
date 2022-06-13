import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-formulaire-client',
  templateUrl: './formulaire-client.component.html',
  styleUrls: ['./formulaire-client.component.css']
})
export class FormulaireClientComponent implements OnInit {

  ClientForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private clientService:ClientService, private router:Router) { }

  ngOnInit(): void {
    this.ClientForm = this.formBuilder.group({
      nom: [null,[Validators.required]],
      prenom: [null, [Validators.required]],
      dateNaissance: [null, [Validators.required]],
      mail: [null, [Validators.required]],
      adresse: [null, [Validators.required]]
    },
    {
      updateOn: "blur"
    })
  }

  onSubmit()
  {
    this.clientService.ajoutClient(this.ClientForm.value).subscribe()
    this.router.navigate(["client"])
  }

}
