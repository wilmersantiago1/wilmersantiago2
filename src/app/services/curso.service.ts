import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  ruta = "https://localhost:44309"
  constructor(private readonly http: HttpClient) { }
  getCursos(){
    return this.http.get(this.ruta + '/api/curso/GetCursos');
  }
  insertCurso(body){
    return this.http.post<any>(this.ruta + '/api/Curso/CrearCurso', body);
  }
  deleteCurso(a){
    return this.http.post<any> (this.ruta + '/api/Curso/EliminarCurso',a);
  }
}