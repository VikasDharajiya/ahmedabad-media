import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { News } from './features/news/news';
import { Category } from './features/category/category';
import { Layouts } from './layouts/layouts';
import { AddNews } from './features/news/add-news/add-news';
import { AddCategory } from './features/category/add-category/add-category';

export const routes: Routes = [
  { path: '', component: Login },
  {
    path: 'layouts',
    component: Layouts,
    children: [
      { path: '', redirectTo: 'news', pathMatch: 'full' },

      { path: 'news', component: News },
      { path: 'news/add-news', component: AddNews },

      { path: 'category', component: Category },
      { path: 'category/add-category', component: AddCategory },
    ],
  },
];
