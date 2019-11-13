import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpandableComponent } from '../../expandable/expandable.component';


import { ExterneHulpPage } from './externe-hulp.page';

describe('ExterneHulpPage', () => {
  let component: ExterneHulpPage;
  let fixture: ComponentFixture<ExterneHulpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExterneHulpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExterneHulpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
