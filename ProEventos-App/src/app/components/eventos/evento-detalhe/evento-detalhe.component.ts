import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/models/Evento';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit{

constructor(
  private router: ActivatedRoute,
  private eventoService: EventoService
){
}

evento = {} as Evento;
form = {} as FormGroup;

ngOnInit(): void {
  this.carregarEvento();
  this.Validation();
}

public Validation(): any
{
  this.form = new FormGroup({
    local: new FormControl('', Validators.required),
    dataEvento: new FormControl('', Validators.required),
    tema: new FormControl('', Validators.required),
    qtdPessoas: new FormControl('', Validators.required),
    imagemURL: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  })
}

public ResetForm(event: any): any
{
  event.preventDefault();
  this.form.reset();
}

public cssValidator(inputName: any)
{
  return {'is-invalid': this.form.get(inputName)?.errors?.['required'] && this.form.get(inputName)?.touched};
}

public carregarEvento():void
{
  const eventoIdParam = this.router.snapshot.paramMap.get('id');
console.log(eventoIdParam);
  if(eventoIdParam !== null)
    {
      this.eventoService.getEventosById(+eventoIdParam).subscribe(
        (evento: Evento) => {
          this.evento = {...evento};
          this.form.patchValue(this.evento)
        },
        (error: any) => {
          console.error(error);
        },
        () => {}
      );
    }
}

public resetForm(): void {
  this.form.reset();
}

}
