import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopographicWorksComponent } from './topographic-works.component';

describe('TopographicWorksComponent', () => {
  let component: TopographicWorksComponent;
  let fixture: ComponentFixture<TopographicWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopographicWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopographicWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
