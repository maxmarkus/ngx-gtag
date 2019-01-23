import {
    NgModule,
    ModuleWithProviders,
    Optional,
    SkipSelf
} from '@angular/core';
import { NGX_GTAG_CONFIG } from './google-analytics.token';
import { NgxGtag, NgxGtagList } from './google-analytics.interface';
import { GoogleAnayticsComponent } from './google-anaytics/google-anaytics.component';
import { GoogleAnalyticsEventsDirective } from './google-analytics-events/google-analytics-events.directive';

@NgModule({
    declarations: [
        GoogleAnayticsComponent,
        GoogleAnalyticsEventsDirective
    ],
    exports: [
        GoogleAnayticsComponent,
        GoogleAnalyticsEventsDirective
    ]
})
export class NgxGtagModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: NgxGtagModule
    ) {
        if (parentModule) {
            throw new Error(
                'ngx-gtag should only be loaded in one module, preferably your root or core module.'
            );
        }
    }
    static forRoot(options: NgxGtag|NgxGtagList): ModuleWithProviders {
        return {
            ngModule: NgxGtagModule,
            providers: [
                {
                    provide: NGX_GTAG_CONFIG,
                    useValue: options
                }
            ]
        };
    }
}
