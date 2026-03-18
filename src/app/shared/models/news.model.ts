export interface NewsItem {
  id: number;
  thumbnail: string;
  title: string;
  category: string;
  type: string;
  status: string;
  publishedDate: string;
  author: string;
  likes: number;
  shares: number;
  comments: number;
  views: number;
}

export interface NewsDetail extends NewsItem {
  details: string;
  scheduled?: boolean;
  scheduledAt?: string | null;
}
