import { TestBed } from '@angular/core/testing';

import { CreateEditPostService } from './create-edit-post.service';

describe('CreateEditPostService', () => {
  let service: CreateEditPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateEditPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
