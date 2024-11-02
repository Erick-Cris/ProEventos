import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from 'src/app/helpers/ValidatorField';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  ngOnInit(): void {
    this.validation();
  }

  form: any;
  private validation(): void{
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
    }

    this.form = new FormGroup({
      primeiroNome: new FormControl('', Validators.required),
      ultimoNome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', Validators.required),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmeSenha: new FormControl('', Validators.required),
    }, formOptions)
  }

  public cssValidator(inputName: any): any
  {
    return {'is-invalid': this.form.get(inputName).errors && this.form.get(inputName).touched}
  }
}
