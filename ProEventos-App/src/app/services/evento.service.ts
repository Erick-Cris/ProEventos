import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Evento } from './../models/Evento';

@Injectable()
export class EventoService {

  //Erick - Entender melhor o que é esse observable

  baseURL = 'https://localhost:7086/api/Eventos';

  constructor(private http: HttpClient) { }

  public getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.baseURL);
  }

  public getEventosByTema(tema: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseURL}/${tema}/tema`);
  }

  public getEventosById(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.baseURL}/${id}/id`);
  }

  public post(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.baseURL, evento);
  }

  public put(id: number, evento: Evento): Observable<Evento> {
    return this.http.put<Evento>(`${this.baseURL}/${id}`, evento);
  }

  public delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseURL}/${id}`);
  }
}
