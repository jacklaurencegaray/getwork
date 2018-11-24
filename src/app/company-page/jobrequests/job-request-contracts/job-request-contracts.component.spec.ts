import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRequestContractsComponent } from './job-request-contracts.component';

describe('JobRequestContractsComponent', () => {
  let component: JobRequestContractsComponent;
  let fixture: ComponentFixture<JobRequestContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRequestContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRequestContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
