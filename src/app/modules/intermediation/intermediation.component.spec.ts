import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediationComponent } from './intermediation.component';

describe('IntermediationComponent', () => {
  let component: IntermediationComponent;
  let fixture: ComponentFixture<IntermediationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermediationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
