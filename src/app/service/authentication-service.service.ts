import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  constructor(private httpClient: HttpClient) {}
  // Provide username and password for authentication, and once authentication is successful,
  //store JWT token in session
    authenticate(username:string, password:string) {
      console.log(username + ", " + password)
      return this.httpClient
        .post<any>("http://localhost:8080/authenticate", { username, password })
        .pipe(
          map(userData => {
            sessionStorage.setItem("username", username);
            let tokenStr = "Bearer " + userData.token;
            sessionStorage.setItem("token", tokenStr);
            return userData;
          })
        );
    }

    isUserLoggedIn() {
      let user = sessionStorage.getItem("username");
      console.log(!(user === null));
      return !(user === null);
    }

    logOut() {
      sessionStorage.removeItem("username");
    }
}
