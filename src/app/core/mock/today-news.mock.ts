import { TodayNewsItem } from '../../features/today-news/models/today-news.model';
import { NewsItem } from '@shared/models/news.model';

export const TODAY_NEWS_MOCK: TodayNewsItem[] = [
  { id: 1, title: 'Petrol prices increased today', sequence: 1 },
  { id: 2, title: 'Heavy rainfall expected in Gujarat', sequence: 2 },
  { id: 3, title: 'Stock market closed higher today', sequence: 3 },
  { id: 4, title: 'India wins cricket series', sequence: 4 },
  { id: 5, title: 'New metro line inaugurated', sequence: 5 },
  { id: 6, title: 'Gold prices drop slightly', sequence: 6 },
  { id: 7, title: 'Tech companies announce layoffs', sequence: 7 },
  { id: 8, title: 'Festival celebrations begin nationwide', sequence: 8 },
  { id: 9, title: 'Government announces new policy', sequence: 9 },
];

// News picker list — will come from NewsService when API is ready
export const NEWS_PICKER_MOCK: Pick<NewsItem, 'id' | 'title' | 'thumbnail'>[] = [
  { id: 1, title: 'Breaking News 1', thumbnail: 'https://picsum.photos/200' },
  { id: 2, title: 'Breaking News 2', thumbnail: 'https://picsum.photos/300' },
  { id: 3, title: 'Breaking News 3', thumbnail: 'https://picsum.photos/100' },
  { id: 4, title: 'Breaking News 4', thumbnail: 'https://picsum.photos/400' },
  { id: 5, title: 'Breaking News 5', thumbnail: 'https://picsum.photos/500' },
  { id: 6, title: 'Breaking News 6', thumbnail: 'https://picsum.photos/600' },
];
