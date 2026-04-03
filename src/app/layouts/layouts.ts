import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet, Sidebar, CommonModule, RouterModule],
  templateUrl: './layouts.html',
  styleUrls: ['./layouts.css'],
})
export class Layouts {
  isSidebarCollapsed = false;
  isMobile = false;
  isSidebarOpen = false;

  ngOnInit() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

  checkScreen() {
    this.isMobile = window.innerWidth < 768;

    if (this.isMobile) {
      this.isSidebarCollapsed = false;
      this.isSidebarOpen = false;
    } else {
      this.isSidebarCollapsed = false;
      this.isSidebarOpen = true;
    }
  }

  toggleSidebar() {
    if (this.isMobile) {
      this.isSidebarOpen = !this.isSidebarOpen;
    } else {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }

  closeSidebar() {
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }
}
