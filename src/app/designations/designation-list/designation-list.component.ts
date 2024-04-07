import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Designation } from 'src/app/models/designation';
import { DesignationService } from 'src/app/service/designation.service';

@Component({
  selector: 'app-designation-list',
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.css']
})
export class DesignationListComponent implements OnInit {

  designations: any[] = [];

  constructor(private router: Router, private designationService: DesignationService) { }

  ngOnInit(): void {
    this.getDesignations();
  }

  createDesignation(): void {
    this.router.navigate(['/create-designation']);
  }

  updateDesignation(id: number): void {
    this.router.navigate(['/edit-designation', id]);
  }

  getDesignations(): void {
    this.designationService.getAllDesignations().subscribe(
      (data) => {
        this.designations = data;
      },
      (error) => {
        console.log('Error fetching designations:', error);
      }
    );
  }

  deleteDesignation(id: number): void {
    this.designationService.deleteDesignation(id).subscribe(
      () => {
        console.log('Designation deleted successfully.');
        this.designations = this.designations.filter(designation => designation.id !== id);
      },
      (error) => {
        console.log('Error deleting designation:', error);
      }
    );
  }

}
