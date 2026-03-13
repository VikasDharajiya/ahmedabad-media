import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredNews } from './sponsored-news';

describe('SponsoredNews', () => {
  let component: SponsoredNews;
  let fixture: ComponentFixture<SponsoredNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsoredNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsoredNews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
