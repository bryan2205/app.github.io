import { Component, OnInit } from '@angular/core';

import { TaskService} from '../services/task.service'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',

})
export class TaskFormComponent implements OnInit {

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
  }


  addTask(newTaskTitle:HTMLInputElement, newTaskDescription:HTMLInputElement){
    this.taskService.addTasks({
      title: newTaskTitle.value,
      description: newTaskDescription.value,
    })
    newTaskTitle.value = "";
    newTaskDescription.value = "";
    newTaskTitle.focus();
  }
}
