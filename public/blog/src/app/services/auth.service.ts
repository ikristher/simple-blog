import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  handleError(response) {
    if (response.status === 401) {
      alert('Invalid Credentials')
      return throwError(response)
    }
    alert(response.message)
    return throwError(response)
  }

  login(email: string, password: string) {
    return this.http.post<{ token: string }>('/api/account/login', {email, password}).pipe(tap(res => {
        localStorage.setItem('access_token', res.token);
      }), catchError(this.handleError)
    )
  }

  register(email: string, password: string, name: string) {
    return this.http.post<{ token: string }>('/api/account/register', {email, password, name})
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
