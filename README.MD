# ngx-zendesk-webwidget

[![Build Status](https://travis-ci.org/AlisonVilela/ngx-zendesk-webwidget.svg?branch=master)](https://travis-ci.org/AlisonVilela/ngx-zendesk-webwidget)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/AlisonVilela/ngx-zendesk-webwidget/issues)

Zendesk-Webwidget for Angular 2+

Zendesk-Webwidget for Angular 1.x see [here](https://github.com/CrossLead/angular-zendesk-widget)

## Installation

Via [npm](https://www.npmjs.com/package/ngx-zendesk-webwidget):

```bash
npm install ngx-zendesk-webwidget --save
```

## Usage

### 1. Import the `NgxZendeskWebwidgetModule`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxZendeskWebwidgetModule } from 'ngx-zendesk-webwidget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxZendeskWebwidgetModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### SharedModule

```ts
@NgModule({
    exports: [
        CommonModule,
        NgxZendeskWebwidgetModule
    ]
})
export class SharedModule { }
```

##### Configuration

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxZendeskWebwidgetModule, NgxZendeskWebwidgetConfig } from 'ngx-zendesk-webwidget';

import { AppComponent } from './app';

export class ZendeskConfig extends NgxZendeskWebwidgetConfig {
  accountUrl = 'yourdomain.zendesk.com';
  beforePageLoad(zE) {
    zE.setLocale('en');
    zE.hide();
  }
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        NgxZendeskWebwidgetModule.forRoot(ZendeskConfig)
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

##### Configuration with Lazyload

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxZendeskWebwidgetModule, NgxZendeskWebwidgetConfig } from 'ngx-zendesk-webwidget';

import { AppComponent } from './app';

export class ZendeskConfig extends NgxZendeskWebwidgetConfig {
  lazyLoad = true;
  accountUrl = 'yourdomain.zendesk.com';
  beforePageLoad(zE) {
    zE.setLocale('en');
    zE.hide();
  }
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        NgxZendeskWebwidgetModule.forRoot(ZendeskConfig)
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

##### Lazyload load

```ts
import { NgxZendeskWebwidgetService } from 'ngx-zendesk-webwidget';

public initZendesk(): void {
  this.zendeskWidgetService.initZendesk();
}
```

#### 2. Init the `NgxZendeskWebwidgetService`

##### For your application

```ts
import { NgxZendeskWebwidgetService } from 'ngx-zendesk-webwidget';

@Component({
  selector: 'app',
  templateUrl: './app.html'
})
export class app {

  constructor(private _NgxZendeskWebwidgetService: NgxZendeskWebwidgetService) {
  }
}
```

##### With Lazyload

```ts
import { NgxZendeskWebwidgetService } from 'ngx-zendesk-webwidget';

@Component({
  selector: 'app',
  templateUrl: './app.html'
})
export class app {

  constructor(private _NgxZendeskWebwidgetService: NgxZendeskWebwidgetService) {
    this._NgxZendeskWebwidgetService_.initZendesk();
  }
}
```

#### 3. Example to usage

```ts
  constructor(private _NgxZendeskWebwidgetService: NgxZendeskWebwidgetService) {
    _NgxZendeskWebwidgetService.identify({
     name: 'Alison Vilela',
     email: 'yourbestemail@email.com'
    })
    _NgxZendeskWebwidgetService.show()
  }

  logout(){
    _NgxZendeskWebwidgetService.hide()
  }
}
```

## API

### NgxZendeskWebwidgetService

#### Methods

- `setLocale(locale)`: Set locale to change language.
- `identify(userObj)`: If your user is signed in, you can use this methods for to pass the details of that user to your Zendesk.
- `hide()`: The method completely hides all parts of the Widget from the page.
- `show()`: The method displays the Widget on the host page in its starting 'button' state.
- `activate(options)`: The method activates and opens the Widget in its starting state.
- `setHelpCenterSuggestions(options)`: The method enhances the contextual help provided by the Web Widget.
- `setSettings(settings)`: The method sets `window.zESettings`.

For more info, see: [ZendeskAPI](https://developer.zendesk.com/embeddables/docs/widget/api)

#### NgxZendeskWebwidgetConfig

- `lazyLoad`: Boolean for activate Lazyload initialization of Zendesk Web Widget
- `accountUrl`: Url of your domain (example.zendesk.com)
- `beforePageLoad`: Callback, executed after Zendesk loaded

## Issues

Please report bugs and issues [here](https://github.com/AlisonVilela/ngx-zendesk-webwidget/issues).

## License

MIT © [Alison Vilela](https://github.com/AlisonVilela)

## Change log

### v1.0.0

- Update Packages
- Change Class name to pascal case (breaking changes)

### v0.1.5

- Support Angular 8

### v0.1.4

- Support Angular 6

### v0.1.3

- Support Angular 5

### v0.1.2

- Added custom settings

### v0.1.1

- Change documentation

### v0.1.0

- Added documentation
- Initial version
