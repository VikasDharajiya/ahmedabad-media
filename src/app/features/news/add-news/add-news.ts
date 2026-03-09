import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { MenuItem } from 'primeng/api';
import { PageHeader } from '../../../shared/component/page-header/page-header';
import { TextEditor } from '../../../shared/component/text-editor/text-editor';
import { Table, TableColumn } from '../../../shared/component/table/table';
import { FormCard } from '../../../shared/component/form-card/form-card';

@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TableModule,
    ButtonModule,
    MenuModule,
    DialogModule,
    PageHeader,
    TextEditor,
    Table,
    FormCard,
  ],
  templateUrl: './add-news.html',
})
export class AddNews {
  @ViewChild('newsDetailsEditor') newsDetailsEditor?: TextEditor;
  @ViewChild('feedDetailsEditor') feedDetailsEditor?: TextEditor;

  // ── News form ─────────────────────────────────────────────────────────────
  newsForm = {
    titleHighlight: '',
    title: '',
    category: '',
    type: 'Normal',
    status: 'Draft',
    author: '',
    publishedDate: '',
    publishedTime: '',
    details: '',
  };

  // ── Live feed table ───────────────────────────────────────────────────────

  feedColumns: TableColumn[] = [
    { field: 'id', header: 'ID', headerClass: 'w-14 px-4' },
    { field: 'title', header: 'Title', bodyClass: 'font-medium text-gray-700' },
    { field: 'publishedAt', header: 'Published Date & Time', headerClass: 'md:whitespace-nowrap' },
  ];

  liveFeeds: Record<string, unknown>[] = [
    {
      id: 1,
      title:
        'સાબરમતી રિવરફ્રન્ટ પર ઇન્ટરનેશનલ કાઈટ ફેસ્ટિવલ 2026: હેરિટેજ હવેલી ને પોળના સ્થાપત્યની થીમ, 1000 પતંગબાજો પેચ લડાવશે; નાઈટ ફ્લાઈંગ અને કિંજલ દવે લોકોને ડોલાવશે',
      publishedAt: '2024-05-01 09:30',
    },
    { id: 2, title: 'IPL 2024 ફાઇનલ મેચ શરૂ થઈ', publishedAt: '2024-05-10 14:00' },
    { id: 3, title: 'નવી મેટ્રો લાઇન શરૂ થઈ', publishedAt: '2024-05-12 11:15' },
    { id: 4, title: 'અમદાવાદમાં ભારે વરસાદ', publishedAt: '2024-05-15 18:45' },
  ];

  feedMenuItems: MenuItem[] = [
    { label: 'Edit', icon: 'pi pi-pencil' },
    { label: 'Delete', icon: 'pi pi-trash' },
  ];

  handleFeedMenuAction(event: { item: MenuItem; rowData: Record<string, unknown> }): void {
    if (event.item.label === 'Delete') {
      this.liveFeeds = this.liveFeeds.filter((f) => f !== event.rowData);
    }
  }

  // ── Feed dialog ───────────────────────────────────────────────────────────

  feedDialogVisible = false;

  feedForm = {
    date: '',
    time: '',
    details: '',
  };

  openFeedDialog(): void {
    this.feedForm = { date: '', time: '', details: '' };
    this.feedDialogVisible = true;
  }

  closeFeedDialog(): void {
    this.feedDialogVisible = false;
  }

  saveFeed(): void {
    this.liveFeeds = [
      ...this.liveFeeds,
      {
        id: this.liveFeeds.length + 1,
        title: this.feedForm.details.replace(/<[^>]*>/g, '').slice(0, 60),
        publishedAt: `${this.feedForm.date} ${this.feedForm.time}`,
      },
    ];
    this.closeFeedDialog();
    this.feedForm = { date: '', time: '', details: '' };
    // clear feed editor only
    if (this.feedDetailsEditor) {
      this.feedDetailsEditor.setContent('');
    }
  }

  // ── Save news ─────────────────────────────────────────────────────────────

  private get emptyNewsForm() {
    return {
      titleHighlight: '',
      title: '',
      category: '',
      type: 'Normal',
      status: 'Draft',
      author: '',
      publishedDate: '',
      publishedTime: '',
      details: '',
    };
  }

  saveNews(): void {
    console.log('Saving news:', this.newsForm);
    // this.newsService.create(this.newsForm).subscribe(...)

    // Reset form
    this.newsForm = this.emptyNewsForm;
    // this.liveFeeds = [];

    // Clear rich text editor content
    if (this.newsDetailsEditor) {
      this.newsDetailsEditor.setContent('');
    }
  }
}
