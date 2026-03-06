import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet, Sidebar, CommonModule],
  templateUrl: './layouts.html',
  styleUrls: ['./layouts.css'],
})
export class Layouts {
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
