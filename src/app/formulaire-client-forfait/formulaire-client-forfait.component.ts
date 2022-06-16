import { Observable } from 'rxjs';
import { Forfait } from './../model/forfait.model';
import { Client } from './../model/client.model';
import { ForfaitService } from './../service/forfait.service';
import { ClientService } from './../service/client.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-client-forfait',
  templateUrl: './formulaire-client-forfait.component.html',
  styleUrls: ['./formulaire-client-forfait.component.css']
})
export class FormulaireCLientForfaitComponent implements OnInit {

  formClientForfait!:FormGroup
  id!:number

  constructor(private router: Router, private clientService: ClientService, private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, private forfaitService: ForfaitService)
  {
    this.id = activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void
  {
    this.formClientForfait = this.formBuilder.group
    ({

        nom : [null, [Validators.required]],
        prenom : [null, [Validators.required]],
        dateNaissance : [null, [Validators.required]],
        mail : [null, [Validators.required]],
        adresse : [null, [Validators.required]]
      })
  }

 onSave()
 {
  this.clientService.associerClientForfait(this.formClientForfait.value, this.id).subscribe()
 }

}
