
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../Categories';
import { Books } from '../Books';

@Injectable({
  providedIn: 'root'
})
export class CategoryAndBookService {
  private apiUrl = 'https://localhost:7275/api/';

  constructor(private http: HttpClient) {}
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.apiUrl + 'Categories', this.headers).pipe();
  }

  getBooksByCategory(categoryId: number): Observable<Books[]> {
    return this.http.get<Books[]>(this.apiUrl + 'Book' + categoryId, this.headers).pipe();
}
}