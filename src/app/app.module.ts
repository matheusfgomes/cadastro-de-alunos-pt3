import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AlunosComponent } from './aluno/aluno.component';
import { AlunoDetailComponent} from './aluno-detail/aluno-detail.component';
import { AlunoService } from './aluno.service';
import { MensagemService } from './mensagem.service';
import { MensagemComponent } from './mensagem/mensagem.component';
import { DashbordComponent } from './dashbord/dashbord.component';


@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    AlunoDetailComponent,
    MensagemComponent,
    DashbordComponent
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
