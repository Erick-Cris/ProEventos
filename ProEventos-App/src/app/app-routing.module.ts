import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ UserComponent } from './components/user/user.component';
import{ EventosComponent } from './components/eventos/eventos.component'
import{ EventosListaComponent } from './components/eventos/eventos-lista/eventos-lista.component'
import{ EventoDetalheComponent } from './components/eventos/evento-detalhe/evento-detalhe.component'
import{ ContatosComponent } from './components/contatos/contatos.component'
import{ DashboardComponent } from './components/dashboard/dashboard.component'
import{ PalestrantesComponent } from './components/palestrantes/palestrantes.component'
import{ PerfilComponent } from './components/user/perfil/perfil.component'
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      {path: 'registrar', component: RegistrationComponent},
      {path: 'login', component: LoginComponent},
      {path: 'perfil', component: PerfilComponent}
  ]
  },
  {
    path: 'eventos',
    component: EventosComponent,
    children: [
      { path: 'detalhe/:id', component: EventoDetalheComponent },
      { path: 'detalhe', component: EventoDetalheComponent },
      { path: 'lista', component: EventosListaComponent },
    ],
  },
  {path: 'contatos', component: ContatosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'palestrantes', component: PalestrantesComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboard',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
