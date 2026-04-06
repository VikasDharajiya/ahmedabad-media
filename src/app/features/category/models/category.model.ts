export interface CategoryItem {
  id: number;
  categoryName: string;
  sequence: number;
  newsCount: number;
  status: 'Active' | 'Inactive';
}
