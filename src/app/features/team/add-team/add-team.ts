import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-team.html',
})
export class AddTeam {
  form = {
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

  onSubmit() {
    console.log('Form submitted:', this.form);
    // Add your save logic here
  }
}
