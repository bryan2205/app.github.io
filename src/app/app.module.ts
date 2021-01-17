import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Service.

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { SimpleCrudComponent } from './components/simple-crud/simple-crud.component';

import { RouterModule, Routes, } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VoteComponent } from './components/vote/vote.component';
import { LinkComponent } from './components/vote/Link/link/link.component';

import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { TaskFormComponent } from './components/task/task-form/task-form.component';
import { TaskService } from '../app/components/task/services/task.service';
import { TaskTaskComponent } from './components/task/task-task/task-task.component';
import { QuizTestComponent } from './components/quiz-test/quiz-test.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component'
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AuthService } from './components/auth/auth-services/auth.service';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes= [
  { path: 'simple-crud', component: SimpleCrudComponent},
  { path: 'vote', component: VoteComponent},
  { path: 'task', component: TaskComponent},
  { path: 'quiz-test', component: QuizTestComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {path: '',component: BodyComponent, pathMatch: 'full'},
/*   {path:'**', redirectTo: '/', pathMatch: 'full'} */
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SimpleCrudComponent,
    VoteComponent,
    LinkComponent,
    TaskComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskTaskComponent,
    QuizTestComponent,
    LoginComponent,
    RegisterComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule,

  ],
  providers: [
    TaskService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
