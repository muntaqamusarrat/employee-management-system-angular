import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Designation } from 'src/app/models/designation';
import { DesignationService } from 'src/app/service/designation.service';

@Component({
  selector: 'app-create-designation',
  templateUrl: './create-designation.component.html',
  styleUrls: ['./create-designation.component.css']
})
export class CreateDesignationComponent implements OnInit {

  designation: any = {
    id: null,
    name: ''
  };

  constructor(private router: Router, private designationService: DesignationService) { }

  ngOnInit(): void {
  }

  createDesignation(): void {
    this.designationService.createDesignation(this.designation).subscribe(
      () => {
        console.log('Designation created successfully.');
        this.router.navigate(['/designation-list']);
      },
      (error) => {
        console.log('Error creating designation:', error);
      }
    );
  }

}
