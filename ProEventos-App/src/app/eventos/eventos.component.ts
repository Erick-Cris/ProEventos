import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit{

  public eventos: any = [];
  public exibirImagem: boolean = true;
  public isCollapsed: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }



  public getEventos(): void {
    this.http.get('https://localhost:7086/Eventos').subscribe(
      response => {
        this.eventos = response;
        console.log(this.eventos);
      },
      error => console.log(error)
    )
  }

  public alterarImagem(){
    this.exibirImagem = !this.exibirImagem;
  }
}
