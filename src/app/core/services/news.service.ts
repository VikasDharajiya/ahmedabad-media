import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsItem, NewsDetail } from '@shared/models/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  //  Shared list (used in all pages)
  private allNews: NewsItem[] = [
    {
      id: 101,
      thumbnail: 'assets/images/logo.png',
      title:
        'સાબરમતી રિવરફ્રન્ટ પર ઇન્ટરનેશનલ કાઈટ ફેસ્ટિવલ 2026: હેરિટેજ હવેલી ને પોળના સ્થાપત્યની થીમ, 1000 પતંગબાજો પેચ લડાવશે; નાઈટ ફ્લાઈંગ અને કિંજલ દવે લોકોને ડોલાવશે',
      category: 'Crime',
      type: 'Normal',
      status: 'Published',
      publishedDate: '2026-01-26T09:32:00',
      author: 'Admin Desk',
      likes: 120,
      shares: 45,
      comments: 312,
      views: 1245,
    },
    {
      id: 102,
      thumbnail: 'https://picsum.photos/200',

      title: 'Live Flood Coverage',
      category: 'City',
      type: 'Live News',
      status: 'Published',
      publishedDate: '2026-02-25T10:00:00',
      author: 'News Reporter',
      likes: 120,
      shares: 45,
      comments: 422,

      views: 5320,
    },
    {
      id: 103,
      thumbnail: 'https://picsum.photos/100',

      title: 'Election Campaign Begins',
      category: 'State',
      type: 'Sponsored',
      status: 'Scheduled',
      publishedDate: '2026-02-24T09:00:00',
      author: 'City Desk',
      likes: 120,
      shares: 45,
      comments: 53,

      views: 876,
    },
    {
      id: 104,
      thumbnail: 'https://picsum.photos/50',

      title: 'અમદાવાદમાં ભારે વરસાદ: અનેક વિસ્તારોમાં પાણી ભરાયા',
      category: 'શહેર સમાચાર',
      type: 'Breaking',
      status: 'Published',
      publishedDate: '2026-02-25T19:45:00',
      author: 'જય પટેલ',
      likes: 10,
      shares: 415,
      comments: 753,

      views: 2980,
    },
    {
      id: 105,
      thumbnail: 'https://picsum.photos/600',

      title: 'જીવાદોરી કાપતી ચાઇનીઝ દોરી: આ તસવીરો તમને ડરાવવા માટે પણ નહીં બચાવવા માટે છે',
      category: 'State',
      type: 'Sponsored',
      status: 'Scheduled',
      publishedDate: '2026-02-28T12:00:00',
      author: 'City Desk',
      likes: 12110,
      shares: 325,
      comments: 8621,

      views: 876,
    },
    {
      id: 106,
      thumbnail: 'https://picsum.photos/300',

      title: 'બ્રાઝિલની ફિરકીએ મચાવી ધૂમ, યુવાનોમાં Zen-Proનો ટ્રેન્ડ',
      category: 'City',
      type: 'Live News',
      status: 'Published',
      publishedDate: '2026-02-25T11:00:00',
      author: 'મીત શાહ',
      likes: 1120,
      shares: 415,
      comments: 633,

      views: 5320,
    },
    {
      id: 107,
      thumbnail: 'assets/images/NewsThumb/news1.avif',

      title:
        'સાબરમતી રિવરફ્રન્ટ પર ઇન્ટરનેશનલ કાઈટ ફેસ્ટિવલ 2026: હેરિટેજ હવેલી ને પોળના સ્થાપત્યની થીમ, 1000 પતંગબાજો પેચ લડાવશે; નાઈટ ફ્લાઈંગ અને કિંજલ દવે લોકોને ડોલાવશે',
      category: 'Politics',
      type: 'Breaking',
      status: 'Published',
      publishedDate: '2026-02-26T15:00:00',
      author: 'Editorial Team',
      views: 4543221,
      shares: 3445,
      comments: 474,
      likes: 43120,
    },
    {
      id: 108,
      thumbnail: 'assets/images/NewsThumb/n2.avif',

      title: 'ગુજરાતમાં પેટ્રોલના ભાવમાં વધારો',
      category: 'રાજ્ય સમાચાર',
      type: 'Normal',
      status: 'Scheduled',
      publishedDate: '2026-01-26T09:32:00',
      author: 'હિતેશ ત્રિવેદી',
      likes: 12310,
      shares: 41325,
      comments: 3535,

      views: 19100,
    },
    {
      id: 109,
      thumbnail: 'assets/images/NewsThumb/n3.avif',

      title: 'Tech Startups Growing Rapidly in Ahmedabad',
      category: 'Business',
      type: 'Featured',
      status: 'Scheduled',
      publishedDate: '2026-01-26T09:32:00',
      author: 'Startup Desk',
      likes: 1210,
      shares: 32145,
      comments: 3432,

      views: 213200,
    },
    {
      id: 110,
      thumbnail: 'assets/images/NewsThumb/n4.avif',

      title: 'ગરબા મહોત્સવ 2026 માટે તૈયારીઓ શરૂ',
      category: 'મનોરંજન',
      type: 'Normal',
      status: 'Published',
      publishedDate: '2026-03-01T10:00:00',
      author: 'રવિ જોષી',
      likes: 1210,
      shares: 415,
      comments: 3421,

      views: 34100,
    },
    {
      id: 111,
      thumbnail: 'assets/images/NewsThumb/n6.avif',

      title: 'Stock Market Today: Sensex Closes in Red',
      category: 'Finance',
      type: 'Breaking',
      status: 'Scheduled',
      publishedDate: '2026-02-27T18:20:00',
      author: 'Market Analyst',
      likes: 12320,
      shares: 4215,
      comments: 64335,

      views: 17891,
    },
    {
      id: 112,
      thumbnail: 'assets/images/NewsThumb/n5.avif',

      title: 'અમદાવાદ મેટ્રોનો નવો રૂટ જાહેર',
      category: 'શહેર સમાચાર',
      type: 'Normal',
      status: 'Scheduled',
      publishedDate: '2026-02-26T13:00:00',
      author: 'પ્રિયા દેસાઈ',
      likes: 11220,
      shares: 4115,
      comments: 536351,

      views: 211675,
    },
  ];

  //  Details (only for preview pages)
  private newsDetailsMap: Record<number, string> = {
    101: `
    <p>Riverfront festival details...</p>
    <div class="flex justify-center">
    <img class="w-64 max-w-xl h-64 object-cover rounded-lg shadow-sm border border-gray-300" src="https://picsum.photos/800" />
    </div>
  `,
    102: `
    <p>Flood coverage details...</p>
    <div class="flex justify-center">
    <img class="w-64 max-w-xl h-64 object-cover rounded-lg shadow-sm border border-gray-300" src="https://picsum.photos/600" />
    </div>
  `,
  };

  //  Get list (used everywhere)
  getAllNews(): Observable<NewsItem[]> {
    return of(this.allNews);
  }

  //  Get filtered by type (for Live, Sponsored etc)
  getNewsByType(type: string): Observable<NewsItem[]> {
    return of(this.allNews.filter((n) => n.type === type));
  }

  //  Get details (only when needed)
  getNewsById(id: number): Observable<NewsDetail> {
    const base = this.allNews.find((n) => n.id === id);

    return of({
      ...base!,
      details: this.newsDetailsMap[id] || '<p>No details</p>',
    });
  }
}
