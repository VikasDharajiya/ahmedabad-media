import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() collapsed = false;
  @Output() toggle = new EventEmitter<void>();

  menuItems = [
    {
      label: 'Dashboard',
      icon: 'assets/images/dashboard-svg.png',
    },
    {
      label: 'News',
      icon: 'assets/images/tabler-icon-news.png',
      route: '/layouts/news',
    },
    {
      label: 'Live News',
      icon: 'assets/images/live.png',
      route: '/layouts/livenews',
    },
    {
      label: 'Sponsored News',
      icon: 'assets/images/sponsor.png',
      route: '/layouts/sponsored-news',
    },
    {
      label: 'Category',
      icon: 'assets/images/catagory-icon.png',
      route: '/layouts/category',
    },
    {
      label: 'User Management',
      icon: 'assets/images/user-management.png',
      route: '/layouts/user-management',
    },
  ];
}
