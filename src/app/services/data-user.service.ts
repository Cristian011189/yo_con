import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataUserService {
  constructor(private http: HttpClient) {}
  url = environment.url;

  getUser(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  createUser(form: any): Observable<any> {
    return this.http.post<any>(`${this.url}/create`, form);
  }
  updateUser(form: any, id: any): Observable<any> {
    console.log(JSON.stringify(id));
    return this.http.put<any>(`${this.url}/${id}`, form);
  }
  deleteUser(form: any): Observable<any> {
    console.log(`${this.url}/${form}`);
    return this.http.delete<any>(`${this.url}/${form}`);
  }
}
