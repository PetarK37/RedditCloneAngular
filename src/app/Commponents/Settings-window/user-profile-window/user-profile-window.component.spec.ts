import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileWindowComponent } from './user-profile-window.component';

describe('UserProfileWindowComponent', () => {
  let component: UserProfileWindowComponent;
  let fixture: ComponentFixture<UserProfileWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
