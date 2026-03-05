import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(private router: Router) {}

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
      label: 'Category',
      icon: 'assets/images/catagory-icon.png',
      route: '/layouts/category',
    },
  ];
}
