export interface todayData {
  date: string;
  sunrise: string;
  sunset: string;
  bank: string;
  zodiacSign: string;
  season: string;

  petrol: number;
  diesel: number;
  cng: number;
  lpg: number;
}

export interface TodayThumbnail {
  title: string;
  description: string;
  image: File | null;
}
