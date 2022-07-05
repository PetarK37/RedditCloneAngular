import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundWindowComponent } from './not-found-window.component';

describe('NotFoundWindowComponent', () => {
  let component: NotFoundWindowComponent;
  let fixture: ComponentFixture<NotFoundWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
