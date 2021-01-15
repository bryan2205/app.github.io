import { Component } from '@angular/core';

/* models */
import { UserTable } from '../quiz-test/models/quiz-test.model';
import { UserList } from '../quiz-test/models/quiz-test.model'

@Component({
  selector: 'app-body',
  templateUrl: './quiz-test.component.html',
})
export class QuizTestComponent {
  constructor() {}

  yearDate: number;
  utente: string = '';
  user:UserList[] = [
    {list: 'Mario'}
  ]

  
  userList: UserList = new UserList();
  selectedUser: UserTable = new UserTable();

  userTableArray: UserTable[] = [
    { id: 1, nome: 'Bryan', cognome: 'Aguero', citta: 'Perù' },
  ];

  addUserTable() {
    if (this.selectedUser.id === 0) {
      this.selectedUser.id = this.userTableArray.length + 1;
      this.userTableArray.push(this.selectedUser);
    }
    this.selectedUser = new UserTable();
  }

  editTable(usersT: UserTable) {
    this.selectedUser = usersT;
  }

  deleteTable() {
    if (confirm('Are you sure?')) {
      this.userTableArray = this.userTableArray.filter(
        (x) => x != this.selectedUser
      );
      this.selectedUser = new UserTable();
    }
  }
  sendList(addlist:HTMLInputElement){
    this.user.push(this.userList)
  }
}
