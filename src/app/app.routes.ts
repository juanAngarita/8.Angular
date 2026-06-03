import { Routes } from '@angular/router';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { StudentTablePageComponent } from './pages/student-table-page/student-table-page.component';
import { StudentFormComponent } from './pages/student-form/student-form.component';

export const routes: Routes = [
  {
    path: '',
    component: StudentTablePageComponent,
  },
  {
    path: 'student/new',
    component: StudentFormComponent,
  },
  {
    path: 'student/update/:id',
    component: StudentFormComponent,
  },
  {
    path: 'student/:id',
    component: StudentDetailComponent,
  },
];
