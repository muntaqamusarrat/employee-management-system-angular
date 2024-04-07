import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];

  constructor(private route: ActivatedRoute, private router: Router,private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  createProject(): void {
    this.router.navigate(['/create-project']);
  }

  editProject(id?: number): void {
    this.router.navigate(['/edit-project', id]);
  }

  getProjects(): void {
    this.projectService.getAllProjects().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.log('Error fetching projects:', error);
      }
    );
  }

  deleteProject(id: number | undefined): void {
    if (id === undefined) {
      console.error('Cannot delete project: id is undefined');
      return;
    }
    this.projectService.deleteProject(id).subscribe(
      () => {
        console.log('Project deleted successfully.');
      },
      (error) => {
        console.log('Error deleting project:', error);
      }
    );
  }

}
