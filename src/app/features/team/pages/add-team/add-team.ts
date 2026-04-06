import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeader } from '@shared/components/page-header/page-header';
import { Button } from '@shared/components/button/button';
import { TeamService } from '../../services/team.service';
import {
  TEAM_ROLES,
  TEAM_COUNTRIES,
  TEAM_STATES,
  TEAM_CITIES,
} from '../../../../core/mock/team.mock';

@Component({
  selector: 'app-team-add',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeader, Button, ReactiveFormsModule, RouterModule],
  templateUrl: './add-team.html',
})
export class AddTeam {
  private teamService = inject(TeamService);

  teamForm!: FormGroup;

  // From mock constants — no magic strings in component
  roles = [...TEAM_ROLES];
  countries = [...TEAM_COUNTRIES];
  states = [...TEAM_STATES];
  cities = [...TEAM_CITIES];

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.teamForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      birthDate: [''],
      role: ['Admin'],
      password: ['', Validators.required],
      address: [''],
      country: ['India'],
      state: ['Gujarat'],
      city: ['Ahmedabad'],
      zipCode: [''],
      description: [''],
    });
  }

  onSubmit() {
    if (this.teamForm.invalid) {
      this.teamForm.markAllAsTouched();
      return;
    }

    this.teamService.create(this.teamForm.value).subscribe(() => {
      this.teamForm.reset();
      this.router.navigate(['/team']);
    });
  }
}
