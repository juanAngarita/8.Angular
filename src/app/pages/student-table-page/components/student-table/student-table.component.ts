import { Component, inject, input, output } from '@angular/core';
import { Student } from '../../../../models/student.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-table',
  imports: [RouterLink],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss',
})
export class StudentTableComponent {
  //DI
  router = inject(Router);

  verDetalleEstudiante(student: Student) {
    //alert('Estudiante: ' + student.name);
    this.router.navigate(['/student', student.id]);
  }

  desactivarEstudiante(student: Student) {
    this.studentSelected.emit(student);
  }

  activarEstudiante(student: Student) {
    this.studentSelected.emit(student);
  }

  ancho: number = 100;
  alto = 100;

  totalCreditos: number = 100;

  //mala practica
  variable: any = true;

  studentArray = input<Student[]>();

  areStudentsActive = input<boolean>();

  studentSelected = output<Student>();
}
