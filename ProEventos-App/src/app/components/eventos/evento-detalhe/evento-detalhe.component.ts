import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit{

form: any;
constructor(){}

ngOnInit(): void {
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

}
