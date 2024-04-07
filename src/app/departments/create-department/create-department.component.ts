import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent {

  department: any = {
    id: null,
    name: ''
  };

  constructor(private departmentService: DepartmentService, private router: Router) { }

  createDepartment(): void {
    this.departmentService.createDepartment(this.department).subscribe(() => {
      console.log('Department created successfully.');
      this.router.navigate(['/departments']);
    }, (error) => {
      console.log('Error creating department:', error);
    });
  }

}
