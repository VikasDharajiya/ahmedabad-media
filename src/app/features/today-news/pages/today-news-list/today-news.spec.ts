import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayNews } from './today-news';

describe('TodayNews', () => {
  let component: TodayNews;
  let fixture: ComponentFixture<TodayNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayNews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
