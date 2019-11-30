import { Injectable } from '@angular/core';

import {Aluno} from './aluno';
import {ALUNOS} from './mock-alunos' 
import { Observable, of } from 'rxjs';

import {MensagemService} from './mensagem.service';


@Injectable({ 
  providedIn: 'root',
  })


export class AlunoService {

  constructor(private mensagemService: MensagemService) { }



getAlunos(): Observable<Aluno[]>{
  
  this.mensagemService.add('AlunoService: fetched alunos');
  return of (ALUNOS);
}

getAluno(matricula: number): Observable<Aluno>{
  this.mensagemService.add('Serviço Escolar informa' );
  return of (ALUNOS.find(aluno => aluno.matricula === matricula));
}

}

