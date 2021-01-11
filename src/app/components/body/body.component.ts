import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor() {}


   classe = true;
   name:string = "";
   valute:number;
   utente:string = "";
   users = ['Lista:']





   addUser(){
     this.users.push(this.utente)
   }

   userTable = [
     {nome:'Bryan', cognome:'Aguero', citta:'Perù'}
   ]
   addUserTable(nome, cognome, citta){
     this.userTable.push(
       {nome:nome, cognome:cognome, citta:citta}
     );
   }


}

