import { ClientService } from './../service/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit {

  ClientForm?:FormGroup
  idClient!:number

  constructor(private formBuilder:FormBuilder, private clientService:ClientService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.idClient = activatedRoute.snapshot.params["id"]
   }

  ngOnInit(): void {
    this.clientService.getClientById(this.idClient).subscribe( client => {

      this.ClientForm = this.formBuilder.group({
        id: [client.id,[Validators.required]],
        nom: [client.nom, [Validators.required]],
        prenom: [client.prenom, [Validators.required]],
        dateNaissance: [client.dateNaissance, [Validators.required]],
        mail: [client.mail, [Validators.required]],
        adresse: [client.adresse, [Validators.required]]
      })
    })
  }

  onUpdate()
  {
    this.clientService.updateClient(this.ClientForm?.value).subscribe()
    this.router.navigate(["client"])
  }
}
