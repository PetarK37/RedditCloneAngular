import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInNavMenuComponent } from './logged-in-nav-menu.component';

describe('LoggedInNavMenuComponent', () => {
  let component: LoggedInNavMenuComponent;
  let fixture: ComponentFixture<LoggedInNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInNavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
