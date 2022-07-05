import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAutjorizedComponent } from './not-autjorized.component';

describe('NotAutjorizedComponent', () => {
  let component: NotAutjorizedComponent;
  let fixture: ComponentFixture<NotAutjorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAutjorizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAutjorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
