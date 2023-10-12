import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livros } from '../models/livros';


@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  API: string = 'http://localhost:8080/api/livro';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Livros[]> {
    return this.http.get<Livros[]>(this.API);
  }

  save(livro: Livros): Observable<Livros> {
    return this.http.post<Livros>(this.API, livro);
  }
  update(livro: Livros): Observable<Livros> {
    return this.http.put<Livros>(`${this.API}/${livro.id}`, livro);
}

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  exemploErro(): Observable<Livros[]> {
    return this.http.get<Livros[]>(this.API + '/erro');
  }
}
