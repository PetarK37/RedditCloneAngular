import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardKarmaComponent } from './post-card-karma.component';

describe('PostCardKarmaComponent', () => {
  let component: PostCardKarmaComponent;
  let fixture: ComponentFixture<PostCardKarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardKarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardKarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
