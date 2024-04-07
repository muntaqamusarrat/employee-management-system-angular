import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { EditSkillComponent } from './skills/edit-skill/edit-skill.component';
import { CreateSkillComponent } from './skills/create-skill/create-skill.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { DesignationListComponent } from './designations/designation-list/designation-list.component';
import { CreateDesignationComponent } from './designations/create-designation/create-designation.component';
import { EditDesignationComponent } from './designations/edit-designation/edit-designation.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    SkillListComponent,
    EditSkillComponent,
    CreateSkillComponent,
    ProjectListComponent,
    EditProjectComponent,
    CreateProjectComponent,
    DesignationListComponent,
    CreateDesignationComponent,
    EditDesignationComponent,
    DepartmentListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
