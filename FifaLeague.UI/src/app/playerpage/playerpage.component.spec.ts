import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerpageComponent } from './playerpage.component';

describe('PlayerComponent', () => {
  let component: PlayerpageComponent;
  let fixture: ComponentFixture<PlayerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
