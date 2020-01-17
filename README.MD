# ngx-zendesk-webwidget

[![Maintainability](https://api.codeclimate.com/v1/badges/75bc5877b3bf6939fe44/maintainability)](https://codeclimate.com/github/AlisonVilela/ngx-zendesk-webwidget/maintainability)
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
  callback(zE) {
    // You can call every command you want in here
    zE('webWidget', 'hide');
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
  callback(zE) {
    // You can call every command you want in here
    zE('webWidget', 'hide');
  }
}

@NgModule({
    imports: [
      BrowserModule,
      HttpClientModule,
      NgxZendeskWebwidgetModule.forRoot(ZendeskConfig)
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
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

  constructor(private _NgxZendeskWebwidgetService: NgxZendeskWebwidgetService) { }

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
  this._NgxZendeskWebwidgetService.zE('webWidget', 'identify', {
    name: 'Fulano de Tal',
    email: 'your_user_email@email.com'
  });

  this._NgxZendeskWebwidgetService.zE('webWidget', 'prefill', {
      name: {
      value: 'Fulano de Tal',
      readOnly: true
    },
    email: {
      value: 'your_user_email@email.com',
      readOnly: true
    }
  });

  this._NgxZendeskWebwidgetService.zE('webWidget', 'show');
}

logout(){
  this._NgxZendeskWebwidgetService.zE('webWidget', 'hide');
}
```

## API

### NgxZendeskWebwidgetService

#### Methods

- `zE('webWidget:<action>', '<event|property>', <parameters>)`: All commands follow the same basic syntax. Please see [Zendesk Documentation](https://developer.zendesk.com/embeddables/docs/widget/introduction) for more information.

#### NgxZendeskWebwidgetConfig

- `lazyLoad`: Boolean for activate Lazyload initialization of Zendesk Web Widget
- `timeOut`: Timeout in milliseconds of the timer before opening the widget, zendesk unfortunately needs to load more files after the initial promise has been resolved, such as translation files. (default: 30 seconds)
- `injectionTag`: You can identify which tag will be used as a reference for widget injection('head', 'body', 'script'). (Default: 'head')
- `accountUrl`: Url of your domain (example.zendesk.com)
- `callback`: Callback, executed after Zendesk loaded

## Issues

Please report bugs and issues [here](https://github.com/AlisonVilela/ngx-zendesk-webwidget/issues).

## License

MIT © [Alison Vilela](https://github.com/AlisonVilela)

## Change log

### v2.1.0

- Include injectionTag in NgxZendeskWebwidgetConfig based on [issue 30](https://github.com/AlisonVilela/ngx-zendesk-webwidget/issues/30)

### V2.0.0

- API services that used legacy zE methods (setLocale, identify, hide, show, activate, setHelpCenterSuggestions, setSettings) have been removed, you now need to use the new command syntax for greater flexibility (breaking changes)
- beforePageLoad(zE) changed to callback(zE) (breaking changes)

### V1.0.1

- Fix bugs

### v1.0.0

- Update Packages
- Change Class name to pascal case (breaking changes)
- Lazyload Implemented, based on [Pull 23](https://github.com/AlisonVilela/ngx-zendesk-webwidget/pull/23)
- Configure Timeout on Webwidget initialization

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
