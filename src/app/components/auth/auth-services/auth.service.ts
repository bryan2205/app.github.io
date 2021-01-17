import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable()
export class AuthService {
  

  constructor(public _aFAuth: AngularFireAuth) {}

  async login(email: string, password: string) {
    try {
      const result = await this._aFAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string) {
    try {
      const result = await this._aFAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this._aFAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser() {
    return this._aFAuth.authState.pipe(first()).toPromise();
  }
}
