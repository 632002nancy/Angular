import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitcomponentComponent } from './submitcomponent.component';

describe('SubmitcomponentComponent', () => {
  let component: SubmitcomponentComponent;
  let fixture: ComponentFixture<SubmitcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
