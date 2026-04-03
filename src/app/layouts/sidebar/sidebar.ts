import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoTooltip } from '@shared/component/info-tooltip/info-tooltip';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, InfoTooltip],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() collapsed = false;
  @Output() toggle = new EventEmitter<void>();
  @Input() isMobile = false;
  @Input() isOpen = false;

  menuItems = [
    {
      label: 'Dashboard',
      icon: 'assets/images/dashboard-svg.png',
      route: 'dashboard',
    },
    {
      label: 'Master Category',
      icon: 'assets/images/catagory-icon.png',
      route: '/category',
    },
    {
      label: 'News',
      icon: 'assets/images/tabler-icon-news.png',
      route: '/news',
    },
    {
      label: 'Live News',
      icon: 'assets/images/live.png',
      route: '/livenews',
    },
    {
      label: 'Sponsored News',
      icon: 'assets/images/sponsor.png',
      route: '/sponsored-news',
    },
    {
      label: 'Dashboard Data',
      icon: 'assets/images/today-data.png',
      route: '/today-data',
    },
    {
      label: "Today's News",
      icon: 'assets/images/today-news.png',
      route: '/today-news',
    },
    {
      label: 'Application Report',
      icon: 'assets/images/user-management.png',
      route: '/user-management',
    },
    {
      label: 'Team',
      icon: 'assets/images/team.png',
      route: '/team',
    },
  ];
}
