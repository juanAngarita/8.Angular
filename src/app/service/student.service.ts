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
    student.active = false;
  }

  activarEstudiante(student: Student) {
    student.active = true;
  }

  getActivestudents() {
    return this.studentArray.filter((student) => student.active);
  }

  getInactiveStudents() {
    return this.studentArray.filter((student) => !student.active);
  }

  getStudentById(id: number) {
    return this.studentArray.find((s) => s.id === id);
  }

  deleteStudent(student: Student) {
    this.studentArray = this.studentArray.filter((s) => s.id !== student.id);
  }

  // servicios, clase, singleton,
  private studentArray: Student[] = [
    {
      id: 1,
      name: 'Pepe',
      age: 20,
      semester: 3,
      correo: 'pepe@gmail.com',
      promedio: 3.0,
      creditosCursados: 10,
      active: true,
    },
    {
      id: 2,
      name: 'Luis',
      age: 20,
      semester: 3,
      correo: 'luis@gmail.com',
      promedio: 3.0,
      creditosCursados: 100,
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_eyKFEgycvP5t53oWdydRrDeVjB7AB8Tew&s',
      active: true,
    },
    {
      id: 3,
      name: 'Maria',
      age: 20,
      semester: 3,
      correo: 'maria@gmail.com',
      promedio: 3.0,
      creditosCursados: 20,
      photo:
        'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=300&q=80',
      active: true,
    },
    {
      id: 4,
      name: 'Pedro',
      age: 20,
      semester: 3,
      correo: 'pedro@gmail.com',
      promedio: 3.0,
      creditosCursados: 80,
      photo:
        'https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F337051%2F08cad79f-f038-4d2b-9934-6ae09c5042b1.jpg',
      active: true,
    },
    {
      id: 5,
      name: 'Pepe4',
      age: 24,
      semester: 3,
      correo: 'pepe@gmail.com',
      promedio: 3.0,
      creditosCursados: 100,
      active: false,
    },
  ];
}
