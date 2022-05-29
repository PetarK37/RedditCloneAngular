import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPageAssideComponent } from './community-page-asside.component';

describe('CommunityPageAssideComponent', () => {
  let component: CommunityPageAssideComponent;
  let fixture: ComponentFixture<CommunityPageAssideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPageAssideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityPageAssideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
