import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSelectDialog } from './news-select-dialog';

describe('NewsSelectDialog', () => {
  let component: NewsSelectDialog;
  let fixture: ComponentFixture<NewsSelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsSelectDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSelectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
