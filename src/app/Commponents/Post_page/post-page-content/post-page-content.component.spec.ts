import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPageContentComponent } from './post-page-content.component';

describe('PostPageContentComponent', () => {
  let component: PostPageContentComponent;
  let fixture: ComponentFixture<PostPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPageContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
