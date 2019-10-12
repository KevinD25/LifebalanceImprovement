import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyExerPage } from './happy-exer.page';

describe('HappyExerPage', () => {
  let component: HappyExerPage;
  let fixture: ComponentFixture<HappyExerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyExerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyExerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
