import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusspendAlertComponent } from './susspend-alert.component';

describe('SusspendAlertComponent', () => {
  let component: SusspendAlertComponent;
  let fixture: ComponentFixture<SusspendAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SusspendAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SusspendAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
