import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../../../services/evento.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Evento } from 'src/app/models/Evento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-lista',
  templateUrl: './eventos-lista.component.html',
  styleUrls: ['./eventos-lista.component.scss']
})
export class EventosListaComponent implements OnInit{

  //Modal - Inicio
  modalRef?: BsModalRef;
  message?: string;
  //Modal - Fim
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
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

  constructor(
    private EventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);

    this.getEventos();
  }



  public getEventos(): void {
    this.EventoService.getEventos().subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = response;
      },
      error => {
        console.log(error);
          this.toastr.error('Erro', 'Falha ao buscar na API!');
      }
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

  //Modal
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef?.hide();
  }

  decline(): void {
    this.modalRef?.hide();
  }

  detalheEvento(id: number): void{
    this.router.navigate([`eventos/detalhe/${id}`]);
  }

  public getNomeDoPrimeiroLote(evento: Evento): string {
    if (evento.lotes && evento.lotes.length > 0) {
      return evento.lotes[0].nome;
    }
    return ''; // Ou outro valor padrão
  }
}
