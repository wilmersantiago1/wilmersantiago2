import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-ingcurso',
  templateUrl: './ingcurso.component.html',
  styleUrls: ['./ingcurso.component.css']
})
export class IngcursoComponent implements OnInit {
 
  ingcursoForm = this.nuevoCurso.group ({
    IdNivel: ['', Validators.required],
    IdSede: ['', Validators.required],
    Seccion: ['', Validators.required],
    IdModalidad: ['', Validators.required],
    Vacantes: ['', Validators.required],
    IdHorario: ['', Validators.required],
    IdProfesor: ['', Validators.required],
    Costo: ['', Validators.required],
    FechaInicio: [''],
    FechaFin: [''],
    Usuario: ['', Validators.required],
    MinimoAlumnos: ['', Validators.required],
    Imagen: ['']
  });
  

  constructor(private nuevoCurso: FormBuilder, private readonly cursoService: CursoService) {

   }
cursoInsert(rest){
    this.cursoService.insertCurso(rest).subscribe((rest: any) => {
      
      console.log(rest);
    })
}

  onSubmit(){
    if (this.ingcursoForm.valid)
    {
      this.cursoInsert(this.ingcursoForm.value);
    }
  }

  ngOnInit(): void {
  }

}
