import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveNews } from './live-news';

describe('LiveNews', () => {
  let component: LiveNews;
  let fixture: ComponentFixture<LiveNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveNews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
