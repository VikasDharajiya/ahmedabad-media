import { Component, ElementRef, ViewChild } from '@angular/core';
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
import { Button } from '../../../shared/component/button/button';
import { Dialog } from './components/dialog/dialog';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DatePickerModule } from 'primeng/datepicker';

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
    Button,
    Dialog,
    ToggleSwitchModule,
    DatePickerModule,
  ],
  templateUrl: './add-news.html',
})
export class AddNews {
  @ViewChild('newsDetailsEditor') newsDetailsEditor?: TextEditor;
  @ViewChild('imageInput') imageInput!: ElementRef;

  // constructor(private zone: NgZone) {}
  // constructor(private cdr: ChangeDetectorRef) {}

  // ── News form ─────────────────────────────────────────────────────────────
  newsForm = {
    titleHighlight: '',
    title: '',
    category: '',
    type: 'Normal',
    status: 'Draft',
    author: '',
    scheduled: false,
    scheduledAt: null as Date | null,
    image: null as File | null,
    details: '',
  };

  categories: string[] = ['શહેર સમાચાર', 'રાજ્ય સમાચાર', 'ક્રાઈમ'];

  types: string[] = ['Normal', 'Live News', 'Sponsored'];

  statuses: string[] = ['Draft', 'Published', 'Scheduled'];

  //  image
  imagePreview: string | null = null;
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    this.newsForm.image = file;

    this.imagePreview = URL.createObjectURL(file);
  }

  removeImage() {
    if (this.imagePreview) {
      URL.revokeObjectURL(this.imagePreview);
    }

    this.newsForm.image = null;
    this.imagePreview = null;
  }

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
    { label: 'View', icon: 'pi pi-eye', id: 'view' },
    { label: 'Edit', icon: 'pi pi-pencil', id: 'edit' },
    { label: 'Delete', icon: 'pi pi-trash', id: 'delete' },
  ];

  handleFeedMenuAction(event: { item: MenuItem; rowData: Record<string, unknown> }): void {
    if (event.item.label === 'Delete') {
      this.liveFeeds = this.liveFeeds.filter((f) => f !== event.rowData);
    }
  }

  // ── Feed dialog ───────────────────────────────────────────────────────────

  feedDialogVisible = false;

  openFeedDialog(): void {
    this.feedDialogVisible = true;
  }

  saveFeed(feed: any): void {
    this.liveFeeds = [
      ...this.liveFeeds,
      {
        id: this.liveFeeds.length + 1,
        title: feed.details.replace(/<[^>]*>/g, '').slice(0, 60),
        publishedAt: `${feed.date} ${feed.time}`,
      },
    ];

    this.feedDialogVisible = false;
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
      scheduled: false,
      scheduledAt: null as Date | null,
      image: null as File | null,
      details: '',
    };
  }

  saveNews(): void {
    console.log('Saving news:', this.newsForm);
    // this.newsService.create(this.newsForm).subscribe(...)

    // Reset form
    this.newsForm = this.emptyNewsForm;
    this.imagePreview = null;
    // this.liveFeeds = [];

    // reset file input
    if (this.imageInput) {
      this.imageInput.nativeElement.value = '';
    }

    // Clear rich text editor content
    if (this.newsDetailsEditor) {
      this.newsDetailsEditor.setContent('');
    }
  }
}
