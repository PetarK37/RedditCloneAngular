import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsWindowUserComponent } from './settings-window-user.component';

describe('SettingsWindowUserComponent', () => {
  let component: SettingsWindowUserComponent;
  let fixture: ComponentFixture<SettingsWindowUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsWindowUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsWindowUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
