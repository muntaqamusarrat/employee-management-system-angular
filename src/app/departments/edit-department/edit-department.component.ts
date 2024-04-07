import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  department: any = {
    id: null,
    name: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.getDepartment();
  }

  getDepartment(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString) {
      const id = +idString;
      this.departmentService.getDepartmentById(id)
        .subscribe(department => this.department = department);
    }
  }

  updateDepartment(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      const id = +idString;
      this.departmentService.updateDepartment(id, this.department)
        .subscribe(() => this.router.navigate(['/departments']));
    } else {
      console.error('Department ID is null.');
    }
  }
  

}
