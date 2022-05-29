import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPagePostsComponent } from './community-page-posts.component';

describe('CommunityPagePostsComponent', () => {
  let component: CommunityPagePostsComponent;
  let fixture: ComponentFixture<CommunityPagePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPagePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityPagePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
