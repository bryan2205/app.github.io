
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth-services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl (''),
    password: new FormControl ('')
  })
  constructor(private _authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  async onRegister(){
    const { email, password} = this.registerForm.value;
    try{
     const user = await this._authSvc.register(email,password);
     if(user){
       //redirect
       this.router.navigate(['/']);
     }
    }
    catch(error){
      console.log(error)
    }
  }
}
