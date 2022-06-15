import { Forfait } from './forfait.model';
export class Client {
  id!:number
  nom!:string
  prenom!:string
  dateNaissance!:Date
  mail!:string
  adresse!:string
  forfait!:Forfait
}
