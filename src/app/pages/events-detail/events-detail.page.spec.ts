import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetailPage } from './events-detail.page';

describe('EventsDetailPage', () => {
  let component: EventsDetailPage;
  let fixture: ComponentFixture<EventsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
