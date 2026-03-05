import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [ButtonModule, TableModule, CommonModule, FormsModule, RouterModule, MenuModule],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {
  rows: number = 10;
  first: number = 0;

  news = [
    {
      id: 101,
      title:
        'સાબરમતી રિવરફ્રન્ટ પર ઇન્ટરનેશનલ કાઈટ ફેસ્ટિવલ 2026: હેરિટેજ હવેલી ને પોળના સ્થાપત્યની થીમ, 1000 પતંગબાજો પેચ લડાવશે; નાઈટ ફ્લાઈંગ અને કિંજલ દવે લોકોને ડોલાવશે',
      category: 'Crime',
      type: 'Normal',
      status: 'Published',
      publishedDate: '26/01/2026 09:32 AM',
      author: 'Admin Desk',
      views: 1245,
    },
    {
      id: 102,
      title: 'Live Flood Coverage',
      category: 'City',
      type: 'Live News',
      status: 'Draft',
      publishedDate: '25 Feb 2026',
      author: 'News Reporter',
      views: 5320,
    },
    {
      id: 103,
      title: 'Election Campaign Begins',
      category: 'State',
      type: 'Sponsored',
      status: 'Scheduled',
      publishedDate: '24 Feb 2026',
      author: 'City Desk',
      views: 876,
    },
    {
      id: 104,
      title: 'અમદાવાદમાં ભારે વરસાદ: અનેક વિસ્તારોમાં પાણી ભરાયા',
      category: 'શહેર સમાચાર',
      type: 'Breaking',
      status: 'Published',
      publishedDate: '25/02/2026 07:45 PM',
      author: 'જય પટેલ',
      views: 2980,
    },
    {
      id: 105,
      title: 'જીવાદોરી કાપતી ચાઇનીઝ દોરી: આ તસવીરો તમને ડરાવવા માટે પણ નહીં બચાવવા માટે છે',
      category: 'State',
      type: 'Sponsored',
      status: 'Scheduled',
      publishedDate: '28 Feb 2026',
      author: 'City Desk',
      views: 876,
    },
    {
      id: 106,
      title: 'બ્રાઝિલની ફિરકીએ મચાવી ધૂમ, યુવાનોમાં Zen-Proનો ટ્રેન્ડ',
      category: 'City',
      type: 'Live News',
      status: 'Draft',
      publishedDate: '25 Feb 2026',
      author: 'મીત શાહ',
      views: 5320,
    },
    {
      id: 107,
      title:
        'સાબરમતી રિવરફ્રન્ટ પર ઇન્ટરનેશનલ કાઈટ ફેસ્ટિવલ 2026: હેરિટેજ હવેલી ને પોળના સ્થાપત્યની થીમ, 1000 પતંગબાજો પેચ લડાવશે; નાઈટ ફ્લાઈંગ અને કિંજલ દવે લોકોને ડોલાવશે',
      category: 'Politics',
      type: 'Breaking',
      status: 'Published',
      publishedDate: '26 Feb 2026',
      author: 'Editorial Team',
      views: 4521,
    },
    {
      id: 108,
      title: 'ગુજરાતમાં પેટ્રોલના ભાવમાં વધારો',
      category: 'રાજ્ય સમાચાર',
      type: 'Normal',
      status: 'Draft',
      publishedDate: '3 કલાક પહેલા',
      author: 'હિતેશ ત્રિવેદી',
      views: 1900,
    },
    {
      id: 109,
      title: 'Tech Startups Growing Rapidly in Ahmedabad',
      category: 'Business',
      type: 'Featured',
      status: 'Scheduled',
      publishedDate: '01 Mar 2026',
      author: 'Startup Desk',
      views: 2100,
    },
    {
      id: 110,
      title: 'ગરબા મહોત્સવ 2026 માટે તૈયારીઓ શરૂ',
      category: 'મનોરંજન',
      type: 'Normal',
      status: 'Published',
      publishedDate: '27/02/2026 06:20 PM',
      author: 'રવિ જોષી',
      views: 3400,
    },
    {
      id: 111,
      title: 'Stock Market Today: Sensex Closes in Red',
      category: 'Finance',
      type: 'Breaking',
      status: 'Draft',
      publishedDate: '26 Feb 2026',
      author: 'Market Analyst',
      views: 1789,
    },
    {
      id: 112,
      title: 'અમદાવાદ મેટ્રોનો નવો રૂટ જાહેર',
      category: 'શહેર સમાચાર',
      type: 'Normal',
      status: 'Scheduled',
      publishedDate: '02 Mar 2026',
      author: 'પ્રિયા દેસાઈ',
      views: 2675,
    },
  ];

  totalRecords: number = this.news.length;

  nextPage() {
    if (this.first + this.rows < this.totalRecords) {
      this.first += this.rows;
    }
  }

  prevPage() {
    if (this.first > 0) {
      this.first -= this.rows;
    }
  }
  getLastRecord(): number {
    return Math.min(this.first + this.rows, this.totalRecords);
  }

  // menu
  getMenuItems(row: any): MenuItem[] {
    return [
      {
        label: 'Edit News',
        icon: 'pi pi-pencil',
      },
      {
        label: 'Delete News',
        icon: 'pi pi-trash',
      },
    ];
  }
}
