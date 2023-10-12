import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carros } from '../models/carros';


@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  API: string = 'http://localhost:8080/api/carro';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Carros[]> {
    return this.http.get<Carros[]>(this.API);
  }

  save(carro: Carros): Observable<Carros> {
    return this.http.post<Carros>(this.API, carro);
  }
  update(carro: Carros): Observable<Carros> {
    return this.http.put<Carros>(`${this.API}/${carro.id}`, carro);
}

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  exemploErro(): Observable<Carros[]> {
    return this.http.get<Carros[]>(this.API + '/erro');
  }
}
