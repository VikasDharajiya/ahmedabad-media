import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamMember } from '../models/team.model';
import { TEAM_MOCK } from '../../../core/mock/team.mock';

@Injectable({ providedIn: 'root' })
export class TeamService {
  getAll(): Observable<TeamMember[]> {
    return of(TEAM_MOCK);
    // API: return this.api.get<TeamMember[]>('/team');
  }

  create(payload: Partial<TeamMember>): Observable<TeamMember> {
    console.log('POST /team', payload);
    return of({ ...payload, id: Date.now() } as TeamMember);
    // API: return this.api.post<TeamMember>('/team', payload);
  }

  update(id: number, payload: Partial<TeamMember>): Observable<TeamMember> {
    console.log('PUT /team/' + id, payload);
    return of({ ...payload, id } as TeamMember);
    // API: return this.api.put<TeamMember>(`/team/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    console.log('DELETE /team/' + id);
    return of(void 0);
    // API: return this.api.delete<void>(`/team/${id}`);
  }
}
