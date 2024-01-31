import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from 'src/app/helpers/ValidatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  form: any;
constructor(){}

ngOnInit(): void {
  this.Validation();
}

public Validation(): any
{
  const formOptions: AbstractControlOptions = {
    validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
  }

  this.form = new FormGroup({
    primeiroNome: new FormControl('', Validators.required),
    ultimoNome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmeSenha: new FormControl('', Validators.required),
  }, formOptions)
}

}
