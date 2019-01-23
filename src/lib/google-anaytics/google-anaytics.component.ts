import { Component, OnInit, Renderer2 } from '@angular/core';
import { GoogleAnayticsService } from './google-anaytics.service';

@Component({
    selector: 'ngx-gtag',
    template: ''
})
export class GoogleAnayticsComponent implements OnInit {
    constructor(
        private service: GoogleAnayticsService,
        private renderer: Renderer2
    ) {
        this.service.renderer = this.renderer;
    }

    ngOnInit() {
        this.service.startTracking();
    }
}
