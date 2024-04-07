import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: any[] = [];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(
      (data) => {
        this.departments = data;
      },
      (error) => {
        console.log('Error fetching departments:', error);
      }
    );
  }

  deleteDepartment(id: number): void {
    this.departmentService.deleteDepartment(id).subscribe(
      () => {
        console.log('Department deleted successfully.');
        this.departments = this.departments.filter(department => department.id !== id);
      },
      (error) => {
        console.log('Error deleting department:', error);
      }
    );
  }

}