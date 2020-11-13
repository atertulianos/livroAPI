import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl = `${environment.UrlPrincipal}/api/livros`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.baseUrl}/${id}`);
  }

  post(livro: Livro): Observable<Livro>  {
    return this.http.post<Livro>(`${this.baseUrl}`, livro);
  }

  put(id: number, livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.baseUrl}/${id}`, livro);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }


}
