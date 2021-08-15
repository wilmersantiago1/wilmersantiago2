import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { HomeComponent } from './pages/home/home.component';
import { CursoComponent } from './pages/curso/curso.component';
import { LogueoComponent } from './pages/logueo/logueo.component';
import { GestionarComponent } from './pages/gestionar/gestionar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import {IntranetComponent } from './pages/intranet/intranet.component';
import { GestcursosComponent } from './pages/admin/gestcursos/gestcursos.component';
import { IngcursoComponent } from './pages/admin/ingcurso/ingcurso.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';
import { DetallecursoComponent } from './pages/admin/detallecurso/detallecurso.component';

const routes: Routes = [
    
    { path: 'curso/:id', component: CursoComponent },
    { path: 'matricula/:id', component: MatriculaComponent },
    { path: 'curso', component: CursoComponent },
    { path: 'contactenos', component: ContactenosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'matricula', component: MatriculaComponent },
    { path: 'home', component: HomeComponent },
    //{ path: 'logueo', component: LogueoComponent },
    { path: 'logueo/:id', component: LogueoComponent },
    { path: 'gestionar', component: GestionarComponent },
    { path: 'editar', component: EditarComponent },
    { path: 'alumno', component: AlumnoComponent },
    { path: 'intranet', component: IntranetComponent },
    //{ path: 'admin/gestcursos/:id', component: GestcursosComponent},
    { path: 'admin/detallecurso/:id', component: DetallecursoComponent},
    { path: 'admin/detallecurso', component: DetallecursoComponent},
    { path: 'admin/gestcursos', component: GestcursosComponent},
    { path: 'admin/ingcurso', component: IngcursoComponent},
    { path: 'confirmacion', component: ConfirmacionComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}