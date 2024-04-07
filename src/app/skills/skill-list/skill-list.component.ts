import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  skills: any[] = [];

  constructor(private skillService: SkillService, private router: Router) { }

  createSkill(): void {
    this.router.navigate(['/create-skill']);
  }

  editSkill(id: number): void {
    this.router.navigate(['/edit-skill', id]);
  }
 

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getAllSkills().subscribe(
      (data) => {
        this.skills = data;
      },
      (error) => {
        console.log('Error fetching skills:', error);
      }
    );
  }

  deleteSkill(id: number): void {
    this.skillService.deleteSkill(id).subscribe(
      () => {
        console.log('Skill deleted successfully.');
        this.getSkills();
      },
      (error) => {
        console.log('Error deleting skill:', error);
      }
    );
  }

}
