import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent  {

  skill: any = {
    id: null,
    name: ''
  };

  constructor(private router: Router, private skillService: SkillService) { }

  createSkill(): void {
    this.router.navigate(['/create-skill']);
  }
  
  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.skillService.createSkill(this.skill).subscribe(() => {
        console.log('Skill created successfully.');
        form.reset();
      }, error => {
        console.error('Error creating skill:', error);
      });
    }
  }

}
