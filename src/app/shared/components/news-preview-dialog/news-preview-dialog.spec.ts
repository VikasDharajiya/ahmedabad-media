import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPreviewDialog } from './news-preview-dialog';

describe('NewsPreviewDialog', () => {
  let component: NewsPreviewDialog;
  let fixture: ComponentFixture<NewsPreviewDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsPreviewDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPreviewDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
