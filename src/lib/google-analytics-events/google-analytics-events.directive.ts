import { Directive, Renderer2, Input, AfterViewInit, ElementRef } from '@angular/core';
import { NgxGtagEventService } from './google-analytics-events.service';

@Directive({
  selector: '[ngxGtagEvent]'
})
export class GoogleAnalyticsEventsDirective implements AfterViewInit {
  @Input() gtagOn: string;
  @Input() gtagAction: string;
  @Input() gtagOptions: any;

  constructor(
    private ngxGtagEventService: NgxGtagEventService,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngAfterViewInit() {
    try {
      this.renderer.listen(this.el.nativeElement, this.gtagOn, () => {
        this.ngxGtagEventService.event({ action: this.gtagAction || this.gtagOn, options: { ...this.gtagOptions } });
      });
    } catch (err) {
      console.error(err);
    }
  }
}