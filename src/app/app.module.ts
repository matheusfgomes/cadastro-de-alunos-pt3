import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AlunosComponent } from './aluno/aluno.component';
import { AlunoDetailComponent} from './aluno-detail/aluno-detail.component';
import { AlunoService } from './aluno.service';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    AlunoDetailComponent,
    MessageComponent,
    DashboardComponent
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
