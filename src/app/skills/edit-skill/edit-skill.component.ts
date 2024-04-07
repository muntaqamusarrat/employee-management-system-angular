import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: any = {
    id: null,
    name: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSkill();
  }

  getSkill(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Convert id to number
    this.skillService.getSkillById(id).subscribe(
      (data: Skill) => {
        this.skill = data;
      },
      (error) => {
        console.log('Error fetching skill:', error);
      }
    );
  }

  updateSkill(): void {
    this.skillService.updateSkill(this.skill.id, this.skill).subscribe(
      () => {
        console.log('Skill updated successfully.');
        this.router.navigate(['/skills']);
      },
      (error) => {
        console.log('Error updating skill:', error);
      }
    );
  }

}
