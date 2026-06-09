import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Student } from '../../models/student.model';
import { StudentService } from '../../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss',
})
export class StudentFormComponent {
  studentService = inject(StudentService);
  router = inject(Router);
  activedRoute = inject(ActivatedRoute);

  userId: number | undefined = undefined;

  isEdit = false;

  ngOnInit() {
    this.userId = Number(this.activedRoute.snapshot.params['id']);

    if (this.userId) {
      this.isEdit = true;

      const student = this.studentService.getStudentById(this.userId);

      if (student) {
        this.studentForm.patchValue({
          name: student.name,
          age: student.age.toString(),
          semester: student.semester.toString(),
          correo: student.correo,
          photo: student.photo,
        });
      }
    }
  }

  studentForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z ]+$/),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(16),
      Validators.max(80),
      Validators.pattern(/^[0-9]+$/),
    ]),
    semester: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    photo: new FormControl(''),
  });

  handleSumbit() {
    //alert(this.studentForm.value.correo);

    const formValue = this.studentForm.value;

    const newStudent: Student = {
      id: 0,
      name: formValue.name ?? 'Nombre desconocido',
      age: Number(formValue.age),
      semester: Number(formValue.semester),
      correo: formValue.correo ?? 'correo desconocido',
      promedio: 0,
      creditosCursados: 0,
      photo:
        formValue.photo ??
        '',
      active: true
    };

    if (this.isEdit) {
      this.studentService.updateStudent(this.userId!, newStudent);
      this.router.navigate(['']);
    } else {
      this.studentService.addStudent(newStudent);
      this.router.navigate(['']);
    }
  }
}
