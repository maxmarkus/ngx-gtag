import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { NgxGtagEventService } from './google-analytics-events.service';

describe('GoogleAnalyticsEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NgxGtagEventService,
      { provide: PLATFORM_ID, useValue: 'browser' }
    ],
    declarations: []
  }));

  it('should be created', () => {
    const service: NgxGtagEventService = TestBed.get(NgxGtagEventService);
    expect(service).toBeTruthy();
  });
});
