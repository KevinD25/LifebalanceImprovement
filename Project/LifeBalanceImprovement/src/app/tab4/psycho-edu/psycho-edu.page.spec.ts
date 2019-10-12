import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychoEduPage } from './psycho-edu.page';

describe('PsychoEduPage', () => {
  let component: PsychoEduPage;
  let fixture: ComponentFixture<PsychoEduPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychoEduPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychoEduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
