import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCommentDialog } from './news-comment-dialog';

describe('NewsCommentDialog', () => {
  let component: NewsCommentDialog;
  let fixture: ComponentFixture<NewsCommentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCommentDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsCommentDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
