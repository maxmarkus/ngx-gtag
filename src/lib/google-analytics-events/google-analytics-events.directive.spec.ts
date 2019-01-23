import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Component, ElementRef, Renderer2 } from '@angular/core';

import { NgxGtagEventService } from './google-analytics-events.service';
import { GoogleAnalyticsEventsDirective } from './google-analytics-events.directive';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

@Component({
  template: `<button ngxGtagEvent></button>`
})
class TestHoverFocusComponent {
}

describe('GoogleAnalyticsEventsDirective', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Renderer2,
      NgxGtagEventService,
      { provide: PLATFORM_ID, useValue: 'browser' },
      { provide: ElementRef, useClass: MockElementRef }
    ],
    declarations: [TestHoverFocusComponent, GoogleAnalyticsEventsDirective]
  }));

  it('should create an instance', () => {
    const fixture: ComponentFixture<TestHoverFocusComponent> = TestBed.createComponent(TestHoverFocusComponent);
    const component: TestHoverFocusComponent = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
