import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then((m) => m.Login),
  },
  {
    path: '',
    loadComponent: () => import('./layouts/layouts').then((m) => m.Layouts),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
      },

      {
        path: 'news',
        title: 'News',
        children: [
          {
            path: '',
            loadComponent: () => import('./features/news/news').then((m) => m.News),
          },
          {
            path: 'add-news',
            title: 'Add News',
            loadComponent: () => import('./features/news/add-news/add-news').then((m) => m.AddNews),
          },
        ],
      },

      {
        path: 'livenews',
        title: 'Live News',
        children: [
          {
            path: '',
            loadComponent: () => import('./features/live-news/live-news').then((m) => m.LiveNews),
          },
          {
            path: 'add-live-news',
            title: 'Add Live News',
            loadComponent: () =>
              import('./features/live-news/add-live-news/add-live-news').then((m) => m.AddLiveNews),
          },
        ],
      },
      {
        path: 'sponsored-news',
        title: 'Sponsored News',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/sponsored-news/sponsored-news').then((m) => m.SponsoredNews),
          },
          {
            path: 'add-sponsored-news',
            title: 'Add Sponsored News',
            loadComponent: () =>
              import('./features/sponsored-news/add-sponsored-news/add-sponsored-news').then(
                (m) => m.AddSponsoredNews,
              ),
          },
        ],
      },

      {
        path: 'category',
        title: 'Category',
        children: [
          {
            path: '',
            loadComponent: () => import('./features/category/category').then((m) => m.Category),
          },
          {
            path: 'add-category',
            title: 'Add Category',
            loadComponent: () =>
              import('./features/category/add-category/add-category').then((m) => m.AddCategory),
          },
        ],
      },

      {
        path: 'user-management',
        title: 'User Management',
        loadComponent: () =>
          import('./features/user-management/user-management').then((m) => m.UserManagement),
      },

      {
        path: 'team',
        title: 'Team',

        children: [
          { path: '', loadComponent: () => import('./features/team/team').then((m) => m.Team) },
          {
            path: 'add-team',
            title: 'Add Team',
            loadComponent: () => import('./features/team/add-team/add-team').then((m) => m.AddTeam),
          },
        ],
      },

      {
        path: 'today-data',
        title: "Todday's Data",

        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/today-data/today-data').then((m) => m.TodayData),
          },
          {
            path: 'add-today-data',
            title: "Add Today's Data",
            loadComponent: () =>
              import('./features/today-data/add-today-data/add-today-data').then(
                (m) => m.AddTodayData,
              ),
          },
        ],
      },

      {
        path: 'today-news',
        title: "Today's News",
        loadComponent: () => import('./features/today-news/today-news').then((m) => m.TodayNews),
      },
    ],
  },

  { path: '**', redirectTo: 'login' },
];
