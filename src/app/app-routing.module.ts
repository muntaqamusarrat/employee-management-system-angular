import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { CreateSkillComponent } from './skills/create-skill/create-skill.component';
import { EditSkillComponent } from './skills/edit-skill/edit-skill.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { DesignationListComponent } from './designations/designation-list/designation-list.component';
import { CreateDesignationComponent } from './designations/create-designation/create-designation.component';
import { EditDesignationComponent } from './designations/edit-designation/edit-designation.component';

const routes: Routes = [
  { path: 'skills', component: SkillListComponent },
  { path: 'create-skill', component: CreateSkillComponent },
  { path: 'edit-skill/:id', component: EditSkillComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'edit-project/:id', component: EditProjectComponent },
  { path: 'designations', component: DesignationListComponent },
  { path: 'create-designation', component: CreateDesignationComponent },
  { path: 'edit-designation/:id', component: EditDesignationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
