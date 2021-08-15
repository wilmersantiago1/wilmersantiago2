import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  ruta = "https://localhost:44309"
  constructor(private readonly http: HttpClient) { }
  getAlumnos(){
    return this.http.get(this.ruta + '/api/alumno/GetAlumnos');
  }
  insertAlumnos(body){
    return this.http.post<any>(this.ruta + '/api/alumno/CrearAlumno', body);
  }
  deleteAlumnos(a){
    return this.http.post<any> (this.ruta + '/api/alumno/EliminarAlumno',a);
  }
}