import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionOverviewComponent } from './proposition-overview.component';

describe('PropositionOverviewComponent', () => {
  let component: PropositionOverviewComponent;
  let fixture: ComponentFixture<PropositionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
