import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user-management.model';
import { USER_MOCK } from '../../../core/mock/user-management.mock';

@Injectable({ providedIn: 'root' })
export class UserManagementService {
  getAll(): Observable<User[]> {
    return of(USER_MOCK);
    // API: return this.api.get<User[]>('/users');
  }

  delete(id: number): Observable<void> {
    console.log('DELETE /users/' + id);
    return of(void 0);
    // API: return this.api.delete<void>(`/users/${id}`);
  }

  updateStatus(id: number, status: 'Active' | 'Inactive'): Observable<void> {
    console.log('PUT /users/' + id, { status });
    return of(void 0);
    // API: return this.api.put<void>(`/users/${id}`, { status });
  }
}
