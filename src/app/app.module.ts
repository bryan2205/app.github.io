import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Service.
import { EquipService } from './components/body-body/equip/equip.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { BodyBodyComponent } from './components/body-body/body-body.component';
import { SimpleCrudComponent } from './components/simple-crud/simple-crud.component';

import { RouterModule, Routes, } from '@angular/router';
import { EquipComponent } from './components/body-body/equip/equip.component';
import { FormsModule } from '@angular/forms';

import { VoteComponent } from './components/vote/vote.component';
import { LinkComponent } from './components/vote/Link/link/link.component';

import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { TaskFormComponent } from './components/task/task-form/task-form.component';
import { TaskService } from '../app/components/task/services/task.service';
import { TaskTaskComponent } from './components/task/task-task/task-task.component'

const routes: Routes= [
  { path: 'simple-crud', component: SimpleCrudComponent},
  { path: 'equip/:id', component: EquipComponent},
  { path: 'body-body', component: BodyBodyComponent},
  { path: 'vote', component: VoteComponent},
  { path: 'task', component: TaskComponent},
  {path: '',component: BodyComponent, pathMatch: 'full'},
  {path:'**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    BodyBodyComponent,
    SimpleCrudComponent,
    EquipComponent,
    VoteComponent,
    LinkComponent,
    TaskComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskTaskComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,

  ],
  providers: [
    EquipService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
