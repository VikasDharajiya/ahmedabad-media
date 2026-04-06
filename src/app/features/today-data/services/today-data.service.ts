import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { todayData, TodayThumbnail } from '../models/today-data.model';
import { TODAY_DATA_MOCK } from '../../../core/mock/today-data.mock';

@Injectable({ providedIn: 'root' })
export class TodayDataService {
  getAll(): Observable<todayData[]> {
    return of(TODAY_DATA_MOCK);
    // API: return this.api.get<todayData[]>('/today-data');
  }

  create(payload: todayData): Observable<todayData> {
    console.log('POST /today-data', payload);
    return of(payload);
    // API: return this.api.post<todayData>('/today-data', payload);
  }

  saveThumbnail(payload: TodayThumbnail): Observable<void> {
    console.log('POST /today-data/thumbnail', payload);
    return of(void 0);
    // API: return this.api.post<void>('/today-data/thumbnail', payload);
  }
}
