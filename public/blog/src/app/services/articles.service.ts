import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) {
  }

  all(): Observable<Object> {
    return this.http.get('api/articles/')
  }

  get(id) {
    return this.http.get('api/articles/' + id).toPromise()
  }

  create(params) {
    return this.http.post('api/articles/', {options: {params}}).toPromise()
  }

  update(id, params) {
    return this.http.put('api/articles/' + id, {options: {params}}).toPromise()
  }

  delete(id) {
    return this.http.delete('api/articles/' + id).toPromise()
  }
}
