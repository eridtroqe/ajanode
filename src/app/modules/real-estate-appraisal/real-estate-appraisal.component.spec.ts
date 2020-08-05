import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateAppraisalComponent } from './real-estate-appraisal.component';

describe('RealEstateAppraisalComponent', () => {
  let component: RealEstateAppraisalComponent;
  let fixture: ComponentFixture<RealEstateAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
