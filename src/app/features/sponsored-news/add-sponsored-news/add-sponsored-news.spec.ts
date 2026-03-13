import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSponsoredNews } from './add-sponsored-news';

describe('AddSponsoredNews', () => {
  let component: AddSponsoredNews;
  let fixture: ComponentFixture<AddSponsoredNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSponsoredNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSponsoredNews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
