import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DatePickerModule } from 'primeng/datepicker';

interface News {
  id: number;
  title: string;
  publishedAt: string;
}

@Component({
  selector: 'app-add-news',
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    DialogModule,
    TableModule,
    MenuModule,
    ButtonModule,
    DatePickerModule,
  ],
  templateUrl: './add-news.html',
  styleUrl: './add-news.css',
})
export class AddNews {
  selectedType: string = 'Normal';
  visible: boolean = false;
  openFeedDialog() {
    this.visible = true;
  }

  closeFeedDialog() {
    this.visible = false;
  }

  fmt(command: string, value: string = '') {
    document.execCommand(command, false, value);
  }

  // livenews
  newsList: News[] = [
    {
      id: 101,
      title: `વડાપ્રધાનના રૂટ ઉપર બાંધકામ કામગીરી અસ્થાયી રીતે બંધ વડાપ્રધાન અને જર્મન ચાન્સેલરના પ્રવાસને પગલે તેમના આવવાના રૂટ ઉપર આવેલી તમામ બાંધકામ સાઇટો પર ગ્રીન નેટ લગાવવામાં આવી છે અને બાંધકામની કામગીરી અસ્થાયી રીતે બંધ રાખવામાં આવી છે. બાંધકામમાંથી ઉડતી ધૂળ હવાના પ્રદૂષણમાં વધારો ન કરે તે માટે આ નિર્ણય લેવામાં આવ્યો હોવાનું જાણવા મળ્યું છે. તંત્ર દ્વારા આગામી દિવસોમાં પણ પ્રદૂષણ નિયંત્રણ માટે વિશેષ પગલાં ચાલુ રાખવામાં આવશે.`,
      publishedAt: '16/01/2026 09:41 AM',
    },
    {
      id: 102,
      title: `વડાપ્રધાનના રૂટ ઉપર બાંધકામ કામગીરી અસ્થાયી રીતે બંધ ...`,
      publishedAt: '3 કલાક પહેલા',
    },
  ];

  // menu
  menuItems: MenuItem[] = [
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
