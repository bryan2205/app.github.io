import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth-services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private _authSvc: AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const { email, password } = this.loginForm.value;
    try{
      const user = await this._authSvc.login(email, password);
      if(user){
        //redirect to home page
        this.router.navigate(['/'])
      }
    }
    catch(error){
      console.log(error)
    }
  }
}
