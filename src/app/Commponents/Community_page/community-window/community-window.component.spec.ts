import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityWindowComponent } from './community-window.component';

describe('CommunityWindowComponent', () => {
  let component: CommunityWindowComponent;
  let fixture: ComponentFixture<CommunityWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
