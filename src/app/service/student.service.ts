import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  addStudent(student: Student) {
    const newId = this.studentArray.length + 1;
    student.id = newId;
    this.studentArray.push(student);
  }

  updateStudent(id: number, student: Student) {
    const index = this.studentArray.findIndex((s) => s.id === id);
    this.studentArray[index] = student;
  }

  desactivarEstudiante(student: Student) {
    //this.studentArray = this.studentArray.filter((s) => s.id !== student.id);

    this.studentArray.splice(
      this.studentArray.findIndex((s) => s.id === student.id),
      1,
    );

    this.studenRetirados.push(student);
  }

  getActivestudents() {
    return this.studentArray;
  }

  getInactiveStudents() {
    return this.studenRetirados;
  }

  getStudentById(id: number) {
    return this.studentArray.find((s) => s.id === id);
  }

  // servicios, clase, singleton,
  private studentArray: Student[] = [
    {
      id: 1,
      name: 'Pepe',
      age: 20,
      semester: 3,
      correo: 'pepe@pepe',
      promedio: 3.0,
      creditosCursados: 100,
    },
    {
      id: 2,
      name: 'Luis',
      age: 20,
      semester: 3,
      correo: 'luis@luis',
      promedio: 3.0,
      creditosCursados: 100,
      photo:
        'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      name: 'Maria',
      age: 20,
      semester: 3,
      correo: 'maria@maria',
      promedio: 3.0,
      creditosCursados: 100,
      photo:
        'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      name: 'Pedro',
      age: 20,
      semester: 3,
      correo: 'pedro@pedro',
      promedio: 3.0,
      creditosCursados: 100,
      photo:
        'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  studenRetirados: Student[] = [
    {
      id: 4,
      name: 'Pepe4',
      age: 24,
      semester: 3,
      correo: 'pepe@pepe',
      promedio: 3.0,
      creditosCursados: 100,
    },
  ];
}
