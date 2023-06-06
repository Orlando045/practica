/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Items2Component } from './items2.component';

describe('Items2Component', () => {
  let component: Items2Component;
  let fixture: ComponentFixture<Items2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Items2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Items2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
