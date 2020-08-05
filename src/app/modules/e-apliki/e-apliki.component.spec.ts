import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EAplikiComponent } from './e-apliki.component';

describe('EAplikiComponent', () => {
  let component: EAplikiComponent;
  let fixture: ComponentFixture<EAplikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EAplikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EAplikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
