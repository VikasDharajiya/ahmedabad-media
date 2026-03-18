import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeader } from '@shared/component/page-header/page-header';
import { Button } from '@shared/component/button/button';

@Component({
  selector: 'app-team-add',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeader, Button, ReactiveFormsModule],
  templateUrl: './add-team.html',
})
export class AddTeam {
  teamForm!: FormGroup;

  roles: string[] = ['User', 'Admin', 'Owner'];
  countries: string[] = ['India', 'Usa', 'Russia'];
  states: string[] = ['Gujarat', 'Maharashtra', 'Rajasthan'];
  cities: string[] = ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara'];

  constructor(private fb: FormBuilder) {}

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

    console.log('Form submitted:', this.teamForm.value);
    this.teamForm.reset();
  }
}
