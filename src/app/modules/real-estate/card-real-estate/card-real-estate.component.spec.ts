/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardRealEstateComponent } from './card-real-estate.component';

describe('CardRealEstateComponent', () => {
  let component: CardRealEstateComponent;
  let fixture: ComponentFixture<CardRealEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRealEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
