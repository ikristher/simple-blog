import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) {
  }
  handleError(response) {
    if (response.status === 403) {
      alert('You are not allowed to perform this action')
      return throwError(response)
    }
    alert(response.message)
    return throwError(response)
  }

  all(): Observable<Object> {
    return this.http.get('api/articles/')
  }

  get(id) {
    return this.http.get('api/articles/' + id).toPromise()
  }
  update(id, params) {
    return this.http.put('api/articles/' + id, params).pipe(tap(res => {
      return res
    }), catchError(this.handleError))
  }
  create(params) {
    return this.http.post('api/articles/', params).pipe(tap(res => {
      return res
    }), catchError(this.handleError))
  }

  delete(id) {
    return this.http.delete('api/articles/' + id).pipe(tap(res => {
      return res
    }), catchError(this.handleError))
  }
}
