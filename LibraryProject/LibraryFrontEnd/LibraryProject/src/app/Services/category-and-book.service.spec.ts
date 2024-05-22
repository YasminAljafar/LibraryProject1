import { TestBed } from '@angular/core/testing';

import { CategoryAndBookService } from './category-and-book.service';

describe('CategoryAndBookService', () => {
  let service: CategoryAndBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryAndBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
