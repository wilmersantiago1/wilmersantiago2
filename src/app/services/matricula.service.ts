import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  ruta = "https://localhost:44309"

  constructor(private readonly http: HttpClient) { }
  getCursoMatricula(){
    return this.http.get(this.ruta + '/api/curso/GetCursos');
  }

  getAlumnoMatricula(){
    return this.http.get(this.ruta + '/api/Alumno/GetAlumnos');
  }


}
