import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit{

  public eventos: any = [];
  public eventosFiltrados: any = [];
  public exibirImagem: boolean = true;
  public isCollapsed: boolean = true;

  private _filtroLista: string = "";

  public get filtroLista():string
  {
    return this._filtroLista
  }

  public set filtroLista(value: string)
  {
    this._filtroLista = value;
    this.eventosFiltrados = value ? this.filtrarEventos(value) : this.eventos;
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }



  public getEventos(): void {
    this.http.get('https://localhost:7086/Eventos').subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = response;
      },
      error => console.log(error)
    )
  }

  public alterarImagem(){
    this.exibirImagem = !this.exibirImagem;
  }

  public filtrarEventos(filtrarPor: string): any
  {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter((evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1)
  }
}
