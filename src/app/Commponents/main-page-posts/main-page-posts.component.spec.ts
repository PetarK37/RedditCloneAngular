import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagePostsComponent } from './main-page-posts.component';

describe('MainPagePostsComponent', () => {
  let component: MainPagePostsComponent;
  let fixture: ComponentFixture<MainPagePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPagePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPagePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
