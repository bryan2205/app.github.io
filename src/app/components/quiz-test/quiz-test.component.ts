import { Component } from '@angular/core';


/* models */
import { UserTable } from '../quiz-test/models/quiz-test.model'

@Component({
  selector: 'app-body',
  templateUrl: './quiz-test.component.html',
})
export class QuizTestComponent {

  constructor() { }


  classe = true;
  yearDate:number;
  valute: number;
  utente: string = "";
  users = ['Lista:']



  addUser() {
    this.users.push(this.utente)
  }



  selectedUser: UserTable = new UserTable();

  userTableArray: UserTable[] = [
    { id: 1, nome: 'Bryan', cognome: 'Aguero', citta: 'Perù' }
  ]


  addUserTable() {
    if(this.selectedUser.id === 0){
      this.selectedUser.id = this.userTableArray.length + 1;
      this.userTableArray.push(
        this.selectedUser
      );
    }
    this.selectedUser = new UserTable();
  }


  editTable(usersT: UserTable) {
    this.selectedUser = usersT;
  }

  deleteTable() {
    /* for(let i=0; i <this.userTableArray.length; i++){
      if(userT == this.userTableArray[i]){
        this.userTableArray.splice(i,1)
      }
    } */
    if (confirm("Are you sure?")) {
      this.userTableArray = this.userTableArray.filter(x => x != this.selectedUser);
      this.selectedUser = new UserTable();
    }
  }



}

