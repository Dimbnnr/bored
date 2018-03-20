import { TestBed, inject } from '@angular/core/testing';

import { UserPropositionService } from './user-proposition.service';

describe('UserPropositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPropositionService]
    });
  });

  it('should be created', inject([UserPropositionService], (service: UserPropositionService) => {
    expect(service).toBeTruthy();
  }));
});
