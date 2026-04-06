import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsItem, NewsDetail } from '@shared/models/news.model';
import { NEWS_MOCK, NEWS_DETAILS_MOCK } from '../mock/news.mock';

// 🔁 API-READY: When backend is ready, inject ApiService and swap
// of(NEWS_MOCK) → this.api.get<NewsItem[]>('/news')
// of({...}) → this.api.get<NewsDetail>(`/news/${id}`)

@Injectable({ providedIn: 'root' })
export class NewsService {
  getAllNews(): Observable<NewsItem[]> {
    return of(NEWS_MOCK);
    // API: return this.api.get<NewsItem[]>('/news');
  }

  getNewsById(id: number): Observable<NewsDetail> {
    const base = NEWS_MOCK.find((n) => n.id === id)!;
    const details = NEWS_DETAILS_MOCK[id] ?? '<p>No details</p>';
    return of({ ...base, details });
    // API: return this.api.get<NewsDetail>(`/news/${id}`);
  }

  createNews(payload: Partial<NewsItem>): Observable<NewsItem> {
    console.log('POST /news', payload);
    return of({ ...payload, id: Date.now() } as NewsItem);
    // API: return this.api.post<NewsItem>('/news', payload);
  }

  updateNews(id: number, payload: Partial<NewsItem>): Observable<NewsItem> {
    console.log('PUT /news/' + id, payload);
    return of({ ...payload, id } as NewsItem);
    // API: return this.api.put<NewsItem>(`/news/${id}`, payload);
  }

  deleteNews(id: number): Observable<void> {
    console.log('DELETE /news/' + id);
    return of(void 0);
    // API: return this.api.delete<void>(`/news/${id}`);
  }
}
