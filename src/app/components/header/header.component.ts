import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth-services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService],
})
export class HeaderComponent {

  public user$: Observable<any> = this._authSvc._aFAuth.user;
  constructor(private _authSvc: AuthService, private router: Router) {}


  async onLogout(){
    try{
      await this._authSvc.logout();
      this.router.navigate(['/login'])
    }
    catch(error){
      console.log(error)
    }
    this._authSvc.logout()
  }
}
