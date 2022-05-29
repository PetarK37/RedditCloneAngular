import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPageAssideComponent } from './post-page-asside.component';

describe('PostPageAssideComponent', () => {
  let component: PostPageAssideComponent;
  let fixture: ComponentFixture<PostPageAssideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPageAssideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPageAssideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
