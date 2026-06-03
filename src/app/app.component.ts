import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './models/student.model';
import { StudentClass } from './models/studentClass.model';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageTitleComponent } from './pages/student-table-page/components/page-title/page-title.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
