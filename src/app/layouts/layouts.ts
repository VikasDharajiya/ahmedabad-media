import { Component, HostListener } from '@angular/core';
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
  ngOnInit() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

  checkScreen() {
    this.isSidebarCollapsed = window.innerWidth < 768;
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
