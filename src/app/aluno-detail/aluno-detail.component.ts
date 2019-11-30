import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Aluno }         from '../aluno';
import { AlunoService }  from '../aluno.service';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: [ './aluno-detail.component.css' ]
})
export class AlunoDetailComponent implements OnInit {
  aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAluno();
  }

  getAluno(): void {
    const matricula = +this.route.snapshot.paramMap.get('matricula');
    this.alunoService.getAluno(matricula)
      .subscribe(aluno => this.aluno = aluno);
  }

  goBack(): void {
    this.location.back();
  }
}

