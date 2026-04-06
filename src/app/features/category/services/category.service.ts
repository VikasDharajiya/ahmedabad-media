import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryItem } from '../models/category.model';
import { CATEGORY_MOCK } from '../../../core/mock/category.mock';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  getAll(): Observable<CategoryItem[]> {
    return of(CATEGORY_MOCK);
    // API: return this.api.get<CategoryItem[]>('/categories');
  }

  create(payload: Partial<CategoryItem>): Observable<CategoryItem> {
    console.log('POST /categories', payload);
    return of({ ...payload, id: Date.now() } as CategoryItem);
    // API: return this.api.post<CategoryItem>('/categories', payload);
  }

  update(id: number, payload: Partial<CategoryItem>): Observable<CategoryItem> {
    console.log('PUT /categories/' + id, payload);
    return of({ ...payload, id } as CategoryItem);
    // API: return this.api.put<CategoryItem>(`/categories/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    console.log('DELETE /categories/' + id);
    return of(void 0);
    // API: return this.api.delete<void>(`/categories/${id}`);
  }
}
