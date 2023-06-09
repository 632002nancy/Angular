import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecardComponent } from './pricecard.component';

describe('PricecardComponent', () => {
  let component: PricecardComponent;
  let fixture: ComponentFixture<PricecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
