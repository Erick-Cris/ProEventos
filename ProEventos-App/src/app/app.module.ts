//Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { EventosComponent } from './components/eventos/eventos.component';
import { NavComponent } from './shared/nav/nav.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';

//Bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
//Toastr
import { ToastrModule } from 'ngx-toastr';
//Spinner
import { NgxSpinnerModule } from "ngx-spinner";

//Services
import { EventoService } from './services/evento.service';

//Pipes
import {DateTimeFormatPipe} from './helpers/DateTimeFormat.pipe';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { TitleComponent } from './shared/title/title.component';
import { EventosListaComponent } from './components/eventos/eventos-lista/eventos-lista.component';
import { EventoDetalheComponent } from './components/eventos/evento-detalhe/evento-detalhe.component';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    NavComponent,
    PalestrantesComponent,
    DateTimeFormatPipe,
    PerfilComponent,
    DashboardComponent,
    ContatosComponent,
    TitleComponent,
    EventosListaComponent,
    EventoDetalheComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates:true,
      }
    ),
    NgxSpinnerModule,
    FormsModule,//Para usar o Two Way Data Binding [(ngModel)]='nomeVariavelTypescript'
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
