import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-detail',
  imports: [],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss',
})
export class StudentDetailComponent {
  //ID , inyeccion dependencia, singleton, @autowired
  route = inject(ActivatedRoute);
  studentService = inject(StudentService);

  studentId = -1;
  student: Student | undefined;

  // ciclo de vida, destruye
  // el primer metodo que se llama cuando se crea el componente
  // inicializar datos, llamadas a base de datos
  ngOnInit() {
    this.studentId = Number(this.route.snapshot.params['id']);
    this.student = this.studentService.getStudentById(this.studentId);
  }
}
// 1. Obtener el id a traves de la url
// 2. Buscar el estudiante en la BD
// 3. Mostrar el estudiante

// null.atributo oo null.metodo
// null?.atributo, null
// objeto?.metodo, ejecuta el metodo
