import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private clientService:ClientService, private router:Router) { }

  listeClient$!:Observable<Client[]>


  ngOnInit(): void {
    this.listeClient$ = this.clientService.getAllClient()
  }

}
