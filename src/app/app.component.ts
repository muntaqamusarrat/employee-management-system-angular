import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-management-system';

  constructor(private router: Router) { }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  goToSkill(): void {
    this.router.navigate(['/skills']);
  }

  goToProject(): void {
    this.router.navigate(['/projects']);
  }

  goToDesignation(): void {
    this.router.navigate(['/designations']);
  }

  goToDepartment(): void {
    this.router.navigate(['/departments']);
  }
}