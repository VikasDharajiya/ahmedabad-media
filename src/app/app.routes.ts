import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/login/login').then((m) => m.Login),
  },
  {
    path: 'layouts',
    loadComponent: () => import('./layouts/layouts').then((m) => m.Layouts),
    children: [
      { path: '', redirectTo: 'news', pathMatch: 'full' },

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
        loadComponent: () =>
          import('./features/user-management/user-management').then((m) => m.UserManagement),
      },
    ],
  },
];
