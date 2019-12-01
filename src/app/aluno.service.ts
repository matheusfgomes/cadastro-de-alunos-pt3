import { Injectable } from '@angular/core';

import {Aluno} from './aluno';
import {ALUNOS} from './mock-alunos' 
import { Observable, of } from 'rxjs';

import {MessageService} from './message.service';


@Injectable({ 
  providedIn: 'root',
  })


export class AlunoService {

  constructor(private messageService: MessageService) { }



   getAlunos(): Observable<Aluno[]>{
  
  this.messageService.add('AlunoService: fetched alunos');
  return of (ALUNOS);
}

  getAlunos(matricula: number): Observable<Aluno>{
  this.messageService.add('Serviço Escolar informa' );
  return of (ALUNOS.find(aluno => aluno.matricula === matricula));
}

}

