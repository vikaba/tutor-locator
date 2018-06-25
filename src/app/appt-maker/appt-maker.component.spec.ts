import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptMakerComponent } from './appt-maker.component';

describe('ApptMakerComponent', () => {
  let component: ApptMakerComponent;
  let fixture: ComponentFixture<ApptMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
