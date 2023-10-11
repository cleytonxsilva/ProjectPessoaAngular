import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  API: string = 'http://localhost:8080/api/pessoa';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API);
  }

  save(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.API, pessoa);
  }
  update(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.API}/${pessoa.id}`, pessoa);
}

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  exemploErro(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API + '/erro');
  }
}
