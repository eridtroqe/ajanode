/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InfoElementComponent } from './info-element.component';

describe('InfoElementComponent', () => {
  let component: InfoElementComponent;
  let fixture: ComponentFixture<InfoElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
