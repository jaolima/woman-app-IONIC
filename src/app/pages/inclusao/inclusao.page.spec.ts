import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusaoPage } from './inclusao.page';

describe('InclusaoPage', () => {
  let component: InclusaoPage;
  let fixture: ComponentFixture<InclusaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
