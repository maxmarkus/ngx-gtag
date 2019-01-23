# ngx-gtag

A simple and easy solution for adding google analytics page tracking to your angular project

## Installation

`npm install ngx-gtag`

## Setup
In your root module import `NgxGtagModule`
```js
import { NgxGtagModule } from 'ngx-gtag';

@NgModule({
  imports: [
    NgxGtagModule.forRoot({trackingId: 'UA-<YOUR-GA-TRACKINGID>'})
  ]
})
```

Additionally you can pass options to the `forRoot` function. For example:
```js
NgxGtagModule.forRoot({
  trackingId: 'UA-<YOUR-GA-TRACKINGID>',
  options: { 'send_page_view': false }
})
```

Then in your `app.component.html` add the tags
```html
<ngx-gtag></ngx-gtag>
```

You will not need to add any additional code, this package will inject the correct `<script>` tags for you into the `head` section.

This package is also designed to work with Angular Universal projects.

## Events
### Service
```js
NgxGtagEventService.event({
  action: 'sale',
  options: { 'event_category': 'engagement' }
})
```

### Directive
```html
<button ngxGtagEvent
        gtagOn="click"
        gtagAction="sale"
        [gtagOptions]="{ event_category: 'engagement' }">
  Purchase
</button>
```

## Multiple Tracking ID's
It is as simple as passing array to the `forRoot` function when importing
```js
NgxGtagModule.forRoot([
  {
    trackingId: 'UA-<YOUR-GA-TRACKINGID1>',
    options: { 'send_page_view': false }
  },
  {
    trackingId: 'UA-<YOUR-GA-TRACKINGID2>',
    options: { 'send_page_view': true }
  }
])
```

If you then want to specify a trackingId for an event you can use the option `send_to` as per the `gta.js` API
```html
<button ngxGtagEvent
        gtagOn="click"
        gtagAction="sale"
        [gtagOptions]="{ send_to: 'UA-<YOUR-GA-TRACKINGID1>' }">
  Purchase
</button>
```

## FAQ

**Why?**  
The move to gtag.js was a fairly significant API change and I was tired of having to add script tags to my `index.html` along with additional code to get page views to work correctly with Angular. I am also a strong believer in using server side rendering (SSR) and ran into numerous issues with some other packages.

**Can you add this new feature?**  
Maybe... If there is a demand for additional features I will look at implementing them.

## License

[MIT](LICENSE.md) Copyright (c) [fullstax](https://fullstax.net)