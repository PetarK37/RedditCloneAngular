import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsSidebarComponent } from './user-settings-sidebar.component';

describe('UserSettingsSidebarComponent', () => {
  let component: UserSettingsSidebarComponent;
  let fixture: ComponentFixture<UserSettingsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettingsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
