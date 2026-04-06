import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodayNewsItem } from '../models/today-news.model';
import { NewsItem } from '@shared/models/news.model';
import { TODAY_NEWS_MOCK, NEWS_PICKER_MOCK } from '../../../core/mock/today-news.mock';

@Injectable({ providedIn: 'root' })
export class TodayNewsService {
  getAll(): Observable<TodayNewsItem[]> {
    return of(TODAY_NEWS_MOCK);
    // API: return this.api.get<TodayNewsItem[]>('/today-news');
  }

  // When API is ready, this will call NewsService or /news endpoint directly
  getNewsPicker(): Observable<Pick<NewsItem, 'id' | 'title' | 'thumbnail'>[]> {
    return of(NEWS_PICKER_MOCK);
    // API: return this.api.get<NewsItem[]>('/news?type=picker');
  }

  create(payload: Omit<TodayNewsItem, 'id'>): Observable<void> {
    console.log('POST /today-news', payload);
    return of(void 0);
    // API: return this.api.post<TodayNewsItem>('/today-news', payload);
  }

  delete(id: number): Observable<void> {
    console.log('DELETE /today-news/' + id);
    return of(void 0);
    // API: return this.api.delete<void>(`/today-news/${id}`);
  }

  update(id: number, payload: Partial<TodayNewsItem>): Observable<TodayNewsItem> {
    console.log('PUT /today-news/' + id, payload);
    return of({ ...payload, id } as TodayNewsItem);
    // API: return this.api.put<TodayNewsItem>(`/today-news/${id}`, payload);
  }
}
