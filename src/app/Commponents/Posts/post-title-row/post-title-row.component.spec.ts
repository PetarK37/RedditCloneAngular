import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTitleRowComponent } from './post-title-row.component';

describe('PostTitleRowComponent', () => {
  let component: PostTitleRowComponent;
  let fixture: ComponentFixture<PostTitleRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTitleRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTitleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
