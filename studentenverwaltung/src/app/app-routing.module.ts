import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { StudentsEditComponent } from './students/students-edit/students-edit.component';
import { StudentsDetailComponent } from './students/students-detail/students-detail.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},

  {path: 'students', component: StudentsComponent,
  children: [
    { path: ':new', component: StudentsEditComponent},
    { path: ':id', component: StudentsDetailComponent },
    { path: ':id/edit', component: StudentsEditComponent },
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
