import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityUsersWindowComponent } from './community-users-window.component';

describe('CommunityUsersWindowComponent', () => {
  let component: CommunityUsersWindowComponent;
  let fixture: ComponentFixture<CommunityUsersWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityUsersWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityUsersWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
