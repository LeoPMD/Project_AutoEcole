import { Time } from "@angular/common"
import { Observable } from "rxjs"
import { Client } from "./client.model"
import { Formateur } from "./formateur.model"
import { Vehicule } from "./vehicule.model"

export class SeanceConduite {

    id!: number
    dateSeance!: Date
    heureDebutSeance!: Time
    heureFinSeance!: Time
    vehicule!: Vehicule
    client!: Client
    formateur!: Formateur
}
