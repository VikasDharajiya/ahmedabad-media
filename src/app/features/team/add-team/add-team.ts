import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeader } from '@shared/component/page-header/page-header';
import { Button } from '@shared/component/button/button';

@Component({
  selector: 'app-team-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PageHeader, Button],
  templateUrl: './add-team.html',
})
export class AddTeam {
  teamForm = {
    userName: '',
    email: '',
    contactNumber: '',
    birthDate: '',
    role: 'Admin',
    password: '',
    address: '',
    country: 'India',
    state: 'Gujarat',
    city: 'Ahmedabad',
    zipCode: '',
    description: '',
  };

  cities: string[] = ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara'];
  states: string[] = ['Gujrat', 'Maharashtra', 'Rajasthan'];
  counties: string[] = ['India', 'Usa', 'Uk', 'Russia'];
  roles: string[] = ['User', 'Admin', 'Owner'];

  onSubmit() {
    console.log('Form submitted:', this.teamForm);
    // Add your save logic here
  }
}
