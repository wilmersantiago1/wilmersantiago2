import { Component, OnInit } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  cursos = [];

  idAlumno = [];

  showMatri = "true";

  constructor(
 
    private readonly matriculaService: MatriculaService,  
    private activateRoute: ActivatedRoute) { }

    getCursosMatricula(){
      this.matriculaService.getCursoMatricula().subscribe((rest: any) => {
      this.cursos = rest;
      console.log(this.cursos);
      })
      }

      getAlumnoMatricula(){
        this.matriculaService.getAlumnoMatricula().subscribe((rest: any) => {
        this.idAlumno = rest;
        console.log(this.idAlumno);
        })
        }
            
      getCursoMatriculaById(id: number){
      this.matriculaService.getCursoMatricula().subscribe((rest: any) => {
      this.cursos = rest.filter((item: { idCurso: number; }) => item.idCurso == id);
        })
      }   
      
      getAlumnoMatriculaById(id: number){
        this.matriculaService.getAlumnoMatricula().subscribe((rest: any) => {
        this.idAlumno = rest.filter((item: { idAlumno: number; }) => item.idAlumno == id);
        console.log(this.idAlumno);
        })
      }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      if (params.id){
      this.getCursoMatriculaById(params.id);
      this.getAlumnoMatriculaById(1);
      this.showMatri = "false";
    }
    else {
            this.getCursosMatricula();
            }
  });
  }

}
