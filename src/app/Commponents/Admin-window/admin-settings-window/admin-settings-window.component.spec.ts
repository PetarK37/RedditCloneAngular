import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingsWindowComponent } from './admin-settings-window.component';

describe('AdminSettingsWindowComponent', () => {
  let component: AdminSettingsWindowComponent;
  let fixture: ComponentFixture<AdminSettingsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettingsWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
