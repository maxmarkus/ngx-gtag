import { Injectable, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NGX_GTAG_CONFIG } from '../google-analytics.token';
import { NgxGtag, NgxGtagList } from '../google-analytics.interface';

declare const gtag: any;

@Injectable({
    providedIn: 'root'
})
export class GoogleAnayticsService {
    trackingId: string;
    renderer: Renderer2;
    activeConfig: NgxGtag;

    constructor(
        private router: Router,
        @Inject(NGX_GTAG_CONFIG) private config: NgxGtag,
        @Inject(DOCUMENT) private document,
        @Inject(PLATFORM_ID) private platform: Object
    ) { }

    startTracking(configOverride?: NgxGtag) {
        this.activeConfig = configOverride || this.config;

        if (isPlatformBrowser(this.platform)) {
            if (Array.isArray(this.activeConfig)) {
                this.activeConfig.forEach((conf: NgxGtag) => {
                    conf.options = {};
                    let s1 = this.renderer.createElement('script');
                    s1.src = `https://www.googletagmanager.com/gtag/js?id='${conf.trackingId}'`;
                    this.renderer.appendChild(this.document.head, s1);
                })
            }
            else if (this.activeConfig.options === undefined) {
                this.activeConfig.options = {};
                let s1 = this.renderer.createElement('script');
                s1.src = `https://www.googletagmanager.com/gtag/js?id='${this.activeConfig.trackingId}'`;
                this.renderer.appendChild(this.document.head, s1);
            }

            let s2 = this.renderer.createElement('script');
            const text = this.renderer.createText(`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());`);

            this.renderer.appendChild(s2, text);
            this.renderer.appendChild(this.document.head, s2);

            this.router.events
                .pipe(filter(event => event instanceof NavigationEnd))
                .subscribe((navEnd: NavigationEnd) => {
                    if (Array.isArray(this.activeConfig)) {
                        this.activeConfig.forEach((conf: NgxGtag) => {
                            conf.options.page_path = navEnd.urlAfterRedirects
                            gtag('config', conf.trackingId, conf.options);
                        })
                    } else {
                        this.activeConfig.options.page_path = navEnd.urlAfterRedirects
                        gtag('config', this.activeConfig.trackingId, this.activeConfig.options);
                    }
                });
        }
    }
}
