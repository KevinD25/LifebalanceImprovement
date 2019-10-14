import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfullExerPage } from './mindfull-exer.page';

describe('MindfullExerPage', () => {
  let component: MindfullExerPage;
  let fixture: ComponentFixture<MindfullExerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindfullExerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindfullExerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
