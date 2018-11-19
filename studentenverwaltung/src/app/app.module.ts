import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { StudentsDetailComponent } from './students/students-detail/students-detail.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsEditComponent } from './students/students-edit/students-edit.component';
import { StudentsListItemComponent } from './students/students-list/students-list-item/students-list-item.component';
import { StudentsService } from './students/students.service';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    StudentsComponent,
    StudentsDetailComponent,
    StudentsListComponent,
    StudentsEditComponent,
    StudentsListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
