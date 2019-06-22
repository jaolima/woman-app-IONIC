import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderWomansPage } from './wonder-womans.page';

describe('WonderWomansPage', () => {
  let component: WonderWomansPage;
  let fixture: ComponentFixture<WonderWomansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonderWomansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderWomansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
