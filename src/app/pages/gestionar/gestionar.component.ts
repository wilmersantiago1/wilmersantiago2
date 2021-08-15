import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-gestionar',
  templateUrl: './gestionar.component.html',
  styleUrls: ['./gestionar.component.css']
})

export class GestionarComponent implements OnInit {

  alumnos = [];
  p: Number = 1;
  count: Number = 5;
  constructor(private readonly alumnoService: AlumnoService, 
              private activateRoute: ActivatedRoute) { }

  getAlumnos(){
    this.alumnoService.getAlumnos().subscribe((rest: any) => {        
      this.alumnos = rest;      
      console.log(this.alumnos);
    })
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
        this.getAlumnos();
    });
  }

  buscarDatos(filterValue: string) {
    if (filterValue.length>0){
      this.alumnoService.getAlumnos().subscribe((rest: any) => {
        this.alumnos = rest.filter(a => (''+a.nombreAlumno.toUpperCase().trim()).indexOf(filterValue.toUpperCase().trim())!=-1||
                                             (''+a.apellidoAlumno.toUpperCase().trim()).indexOf(filterValue.toUpperCase().trim())!=-1);
        console.log(this.alumnos);
      })
    }else{
      this.getAlumnos();
    }
  }

}

