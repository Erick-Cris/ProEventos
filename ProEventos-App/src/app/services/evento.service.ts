import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Evento } from './../models/Evento';

@Injectable()
export class EventoService {

  //Erick - Entender melhor o que é esse observable

  baseURL = 'https://localhost:7086/Eventos';

  constructor(private http: HttpClient) { }

  public getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.baseURL);
  }
}
