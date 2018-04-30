import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

import { FifaLeagueService } from './fifa-league.service';

describe('FifaLeagueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FifaLeagueService]
    });
  });

  it('should be created', inject([FifaLeagueService], (service: FifaLeagueService) => {
    expect(service).toBeTruthy();
  }));
});
