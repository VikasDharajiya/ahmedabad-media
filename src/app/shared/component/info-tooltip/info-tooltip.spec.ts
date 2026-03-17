import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTooltip } from './info-tooltip';

describe('InfoTooltip', () => {
  let component: InfoTooltip;
  let fixture: ComponentFixture<InfoTooltip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTooltip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTooltip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
