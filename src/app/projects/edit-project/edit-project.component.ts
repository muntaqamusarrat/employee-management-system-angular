import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  project: any = {
    id: null,
    name: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const id = this.route.snapshot.params['id'];
    this.projectService.getProjectById(id).subscribe(
      (data) => {
        this.project = data;
      },
      (error) => {
        console.log('Error fetching project:', error);
      }
    );
  }

  updateProject(): void {
    this.projectService.updateProject(this.project.id, this.project).subscribe(
      () => {
        console.log('Project updated successfully.');
        this.router.navigate(['/projects']);
      },
      (error) => {
        console.log('Error updating project:', error);
      }
    );
  }
}
