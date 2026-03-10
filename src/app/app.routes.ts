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
    ],
  },
];
