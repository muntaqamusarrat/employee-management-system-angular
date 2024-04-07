import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  project: any = {
    id: null,
    name: ''
  }

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
  }

  createProject(): void {
    this.projectService.createProject(this.project).subscribe(
      () => {
        console.log('Project created successfully.');
        this.router.navigate(['/projects']);
      },
      (error) => {
        console.log('Error creating project:', error);
      }
    );
  }
}
