import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import Swal from 'sweetalert2'
import { __values } from 'tslib';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  
  constructor(private readonly alumnoService: AlumnoService) {}
  ngOnInit(): void {}

  form = new FormGroup({
    NombreAlumno    : new FormControl('', Validators.required),
    ApellidoAlumno  : new FormControl('', Validators.required),
    DireccionAlumno : new FormControl('', Validators.required),
    TelefonoAlumno  : new FormControl('', [Validators.required,Validators.minLength(9),Validators.maxLength(9)]),
    CorreoAlumno    : new FormControl('', [Validators.required,Validators.email]),
    DNIAlumno       : new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
    UsuarioCrea     : new FormControl('1')
  });

  alumnoInsert(data){
    this.alumnoService.insertAlumnos(data).subscribe((rest: any) => {
    console.log(rest);
    })
  }

  onSubmit(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Alumno registrado con Exito!!',
      showConfirmButton: false,
      timer: 40000
    })
    
    if (this.form.valid)
    {
      this.alumnoInsert(JSON.stringify(this.form.value));
    }
    alert(JSON.stringify(this.form.value));
    this.form.reset();
  }
}
