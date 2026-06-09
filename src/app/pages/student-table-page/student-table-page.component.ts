import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { Student } from '../../models/student.model';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { StudentService } from '../../service/student.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-table-page',
  imports: [
    NavbarComponent,
    PageTitleComponent,
    StudentTableComponent,
    RouterLink,
  ],
  templateUrl: './student-table-page.component.html',
  styleUrl: './student-table-page.component.scss',
})
export class StudentTablePageComponent {
  cambiarEstadoEstudiante(student: Student) {
    if(student.active){
      this.studentService.desactivarEstudiante(student);
    } else {
      this.studentService.activarEstudiante(student);
    }
    //Actualizar la vista
    this.studentArray = this.studentService.getActivestudents();
    this.studenRetirados = this.studentService.getInactiveStudents();
  }
  //int numero = 20;
  //typescript
  //tipado
  title: string = 'gestionEstudiantes';

  //DI
  private studentService = inject(StudentService);

  //atributo
  username: string = '';

  studentArray: Student[] = [];
  studenRetirados: Student[] = [];


  ngOnInit() {
    this.studentArray = this.studentService.getActivestudents();
    this.studenRetirados = this.studentService.getInactiveStudents();
  }
}
