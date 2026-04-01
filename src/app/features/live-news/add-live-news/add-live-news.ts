import { Component, ElementRef, ViewChild } from '@angular/core';
import { TableColumn, Table } from '@shared/component/table/table';
import { MenuItem } from 'primeng/api';
import { TextEditor } from '@shared/component/text-editor/text-editor';
import { Dialog } from '@shared/component/dialog/dialog';
import { Button } from '@shared/component/button/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeader } from '@shared/component/page-header/page-header';

@Component({
  selector: 'app-add-live-news',
  imports: [Dialog, Table, Button, TextEditor, FormsModule, PageHeader, ReactiveFormsModule],
  templateUrl: './add-live-news.html',
  styleUrl: './add-live-news.css',
})
export class AddLiveNews {
  @ViewChild('newsDetailsEditor') newsDetailsEditor?: TextEditor;

  @ViewChild('imageInput') imageInput!: ElementRef;

  // ── News form ─────────────────────────────────────────────────────────────

  newsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.newsForm = this.fb.group({
      titleHighlight: [''],
      title: [''],
      category: [''],
      scheduled: [false],
      scheduledAt: [null],
      image: [null],
      details: [''],
      metaTitle: [''],
      metaDescription: [''],
      metaImage: [''],
      metaUrl: [''],
    });
  }

  categories: string[] = ['શહેર સમાચાર', 'રાજ્ય સમાચાર', 'ક્રાઈમ'];

  //  image
  imagePreview: string | null = null;
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    this.newsForm.patchValue({
      thumbnail: file,
    });
    this.imagePreview = URL.createObjectURL(file);
  }

  removeImage() {
    if (this.imagePreview) {
      URL.revokeObjectURL(this.imagePreview);
    }

    this.newsForm.patchValue({
      thumbnail: null,
    });
    this.imagePreview = null;
  }

  // meta image
  // meta image
  metaImagePreview: string | null = null;

  onMetaImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];

    this.newsForm.patchValue({
      metaImage: file,
    });

    this.metaImagePreview = URL.createObjectURL(file);
  }

  removeMetaImage() {
    if (this.metaImagePreview) {
      URL.revokeObjectURL(this.metaImagePreview);
    }

    this.newsForm.patchValue({ metaImage: null });
    this.metaImagePreview = null;
  }

  // ── Live feed table ───────────────────────────────────────────────────────

  feedColumns: TableColumn[] = [
    { field: 'id', header: 'ID', headerClass: 'w-14 px-4' },
    { field: 'thumbnail', type: 'image', header: 'Thumbnail', headerClass: 'w-16' },
    {
      field: 'title',
      header: 'Title',
      headerClass: 'min-w-[250px] truncate',
      bodyClass: 'font-medium text-gray-700 ',
    },
    { field: 'category', header: 'Category', headerClass: 'w-32' },
    {
      field: 'status',
      header: 'Status',
      headerClass: 'w-28',
      type: 'badge',
      badgeMap: {
        Published: 'border-green-200 bg-green-100 text-green-700',
        // Draft: 'border-yellow-200 bg-yellow-100 text-yellow-700',
        Scheduled: 'border-blue-200 bg-blue-100 text-blue-700',
      },
    },
    {
      field: 'publishedDate',
      header: 'Published Date',
      type: 'date',
      dateFormat: 'dd/MM/yyyy hh:mm a',
      headerClass: 'w-40',
      bodyClass: '',
    },
    { field: 'author', header: 'Author', headerClass: 'w-32' },
    { field: 'likes', header: 'Likes', headerClass: 'w-20', bodyClass: 'text-center' },
    { field: 'shares', header: 'Shares', headerClass: 'w-20', bodyClass: 'text-center' },
    { field: 'comments', header: 'Comments', headerClass: 'w-20', bodyClass: 'text-center' },

    { field: 'views', header: 'Views', headerClass: 'w-20 text-right', bodyClass: 'text-right' },
  ];
  // feedColumns: TableColumn[] = [
  //   { field: 'id', header: 'ID', headerClass: 'w-14 px-4' },
  //   { field: 'title', header: 'Title', bodyClass: 'font-medium text-gray-700' },
  //   { field: 'publishedAt', header: 'Published Date & Time', headerClass: 'md:whitespace-nowrap' },
  // ];

  liveFeeds: Record<string, unknown>[] = [
    {
      id: 1,
      thumbnail: 'https://picsum.photos/900',
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
      id: 2,
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
      id: 3,
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
  ];

  feedMenuItems: MenuItem[] = [
    { label: 'View', icon: 'pi pi-eye', id: 'view' },
    { label: 'Edit', icon: 'pi pi-pencil', id: 'edit' },
    { label: 'Delete', icon: 'pi pi-trash', id: 'delete' },
    { label: 'Add News', icon: 'pi pi-plus-circle', id: 'add-news' },
    { label: 'Comment View', icon: 'pi pi-comments', id: 'comment-view' },
  ];

  handleFeedMenuAction(event: { item: MenuItem; rowData: Record<string, unknown> }): void {
    if (event.item.label === 'Delete') {
      this.liveFeeds = this.liveFeeds.filter((f) => f !== event.rowData);
    }
  }

  // ── Feed dialog ───────────────────────────────────────────────────────────

  editorReset = false;

  feedForm = {
    date: '',
    time: '',
    details: '',
  };
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
        publishedDate: `${feed.date} ${feed.time}`,
      },
    ];

    this.feedDialogVisible = false;
  }

  // ── Save news ─────────────────────────────────────────────────────────────

  saveNews(): void {
    if (this.newsForm.invalid) return;

    console.log('Saving news:', this.newsForm.value);

    this.newsForm.reset({
      // scheduled: false,
    });

    this.imagePreview = null;
    this.metaImagePreview = null;

    // if (this.imageInput) {
    //   this.imageInput.nativeElement.value = '';
    // }

    this.newsDetailsEditor?.setContent('');
  }
}
