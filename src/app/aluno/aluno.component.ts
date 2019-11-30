import {Component, OnInit} from '@angular/core';
import {Aluno} from '../aluno';

import {AlunoService} from '../aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl:  './aluno.component.html',
  styleUrls : ['./aluno.component.css']
})

export class AlunosComponent implements OnInit{
  
   alunos: Aluno[];

   selectedAluno: Aluno;
  
  constructor(private alunoService: AlunoService){

  }


  ngOnInit(){
    this.getAlunos();
  }

  onSelect(aluno:Aluno): void{
    this.selectedAluno = aluno;
  }
getHeroes(): void {
    this.alunoService.getAlunos()
        .subscribe(heroes => this.alunos = aluno);
  }

 
}