import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSearchResalutCardComponent } from './post-search-resalut-card.component';

describe('PostSearchResalutCardComponent', () => {
  let component: PostSearchResalutCardComponent;
  let fixture: ComponentFixture<PostSearchResalutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSearchResalutCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSearchResalutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
