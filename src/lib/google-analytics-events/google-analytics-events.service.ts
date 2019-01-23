import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxGtagEvent } from '../google-analytics.interface';
declare var gtag: any;

@Injectable({
  providedIn: 'root'
})
export class NgxGtagEventService {
  constructor(
    @Inject(PLATFORM_ID) private platform: Object) { }

  event(event: NgxGtagEvent) {
    if(isPlatformBrowser(this.platform)){
      try {
        gtag('event', event.action, event.options);
      } catch (err) {
        console.error('Error occured with google analytics event', err);
      }
    }
  }
}
