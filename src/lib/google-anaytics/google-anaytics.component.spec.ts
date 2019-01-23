import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NGX_GTAG_CONFIG } from '../google-analytics.token';
import { GoogleAnayticsService } from './google-anaytics.service';

import { GoogleAnayticsComponent } from './google-anaytics.component';

describe('GoogleAnayticsComponent', () => {
    let component: GoogleAnayticsComponent;
    let fixture: ComponentFixture<GoogleAnayticsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GoogleAnayticsComponent],
            providers: [
                GoogleAnayticsService,
                { provide: NGX_GTAG_CONFIG, useValue: { trackingId: 'UA-24362456' } }
            ],
            imports: [
                RouterTestingModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GoogleAnayticsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
