import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from 'src/app/models/designation';
import { DesignationService } from 'src/app/service/designation.service';

@Component({
  selector: 'app-edit-designation',
  templateUrl: './edit-designation.component.html',
  styleUrls: ['./edit-designation.component.css']
})
export class EditDesignationComponent implements OnInit {

  designation: any = {
    id: null,
    name: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, private designationService: DesignationService) { }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    const id = idString ? +idString : null;
    if (id !== null) {
      this.getDesignation(id);
    } else {
      console.error('Designation ID is null.');
    }
  }

  getDesignation(id: number | null): void {
    if (id !== null) {
      this.designationService.getDesignationById(id).subscribe(
        (data) => {
          this.designation = data;
        },
        (error) => {
          console.log('Error fetching designation:', error);
        }
      );
    } else {
      console.error('Designation ID is null.');
    }
  }
  

  updateDesignation(): void {
    this.designationService.updateDesignation(this.designation.id, this.designation).subscribe(
      () => {
        console.log('Designation updated successfully.');
        this.router.navigate(['/designations']);
      },
      (error) => {
        console.log('Error updating designation:', error);
      }
    );
  }
}
