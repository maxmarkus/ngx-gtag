import { TestBed } from '@angular/core/testing';

import { GoogleAnayticsService } from './google-anaytics.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NGX_GTAG_CONFIG } from '../google-analytics.token';

describe('GoogleAnayticsService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            GoogleAnayticsService,
            { provide: NGX_GTAG_CONFIG, useValue:" { trackingId: 'UA-24362456' }" }
        ],
        imports: [
            RouterTestingModule
        ]
    }));

    it('should be created', () => {
        const service: GoogleAnayticsService = TestBed.get(
            GoogleAnayticsService
        );
        expect(service).toBeTruthy();
    });
});
