import { TestBed, inject } from '@angular/core/testing';

import { FifaLeagueService } from './fifa-league.service';

describe('FifaLeagueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FifaLeagueService]
    });
  });

  it('should be created', inject([FifaLeagueService], (service: FifaLeagueService) => {
    expect(service).toBeTruthy();
  }));
});
