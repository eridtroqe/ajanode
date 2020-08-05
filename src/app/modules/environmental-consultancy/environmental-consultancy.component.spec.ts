import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalConsultancyComponent } from './environmental-consultancy.component';

describe('EnvironmentalConsultancyComponent', () => {
  let component: EnvironmentalConsultancyComponent;
  let fixture: ComponentFixture<EnvironmentalConsultancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentalConsultancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
