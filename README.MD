[![Dependency Status](https://dependencyci.com/github/mackelito/ng-zendesk-webwidget/badge)](https://dependencyci.com/github/mackelito/ng-zendesk-webwidget)
[![Maintainability](https://api.codeclimate.com/v1/badges/933c908a637cbd67013b/maintainability)](https://codeclimate.com/github/mackelito/ng-zendesk-webwidget/maintainability)
[![Build Status](https://travis-ci.org/mackelito/ng-zendesk-webwidget.svg?branch=master)](https://travis-ci.org/mackelito/ng-zendesk-webwidget)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/mackelito/ng-zendesk-webwidget/issues)

# ng-zendesk-webwidget

Zendesk-Webwidget for Angular

## Installation

Via [npm](https://www.npmjs.com/package/ng-zendesk-webwidget):

```bash
$ npm install ng-zendesk-webwidget --save
```

## Usage

#### 1. Import the `NgZendeskWebwidgetModule`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ngZendeskWebwidgetModule } from 'ng-zendesk-webwidget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ngZendeskWebwidgetModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

##### SharedModule

```ts
@NgModule({
    exports: [
        CommonModule,
        ngZendeskWebwidgetModule
    ]
})
export class SharedModule { }
```

##### Configuration

```ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ngZendeskWebwidgetModule, ZendeskWebwidgetConfig} from 'ng-zendesk-webwidget';

import {AppComponent} from './app';

export class ZendeskConfig extends ZendeskWebwidgetConfig {
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
        ngZendeskWebwidgetModule.forRoot(ZendeskConfig)
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2. Init the `ZendeskWebwidgetService` for your application:

```ts
import { ZendeskWebwidgetService } from 'ng-zendesk-webwidget';

@Component({
  selector: 'app',
  templateUrl: './app.html'
})
export class app {

  constructor(private _ZendeskWebwidgetService: ZendeskWebwidgetService) {
  }
}
```

#### 3. Example to usage:

```ts
  constructor(private _ZendeskWebwidgetService: ZendeskWebwidgetService) {
    _ZendeskWebwidgetService.identify({
     name: 'Alison Vilela',
     email: 'alison.vilela@live.nl'
    })
    _ZendeskWebwidgetService.show()
  }

  logout(){
    _ZendeskWebwidgetService.hide()
  }
}
```
## API

### ZendeskWebwidgetService

#### Methods:

- `setLocale(locale)`: Set locale to change language.
- `identify(userObj)`: If your user is signed in, you can use this methods for to pass the details of that user to your Zendesk.
- `hide()`: The method completely hides all parts of the Widget from the page.
- `show()`: The method displays the Widget on the host page in its starting 'button' state.
- `activate(options)`: The method activates and opens the Widget in its starting state.
- `setHelpCenterSuggestions(options)`: The method enhances the contextual help provided by the Web Widget.
- `setSettings(settings)`: The method sets `window.zESettings`.

For more info, see: [ZendeskAPI](https://developer.zendesk.com/embeddables/docs/widget/api)

#### ZendeskWebwidgetConfig:

- `accountUrl`: Url of your domain (example.zendesk.com)
- `beforePageLoad`: Callback, executed after Zendesk loaded

## Issues

Please report bugs and issues [here](https://github.com/mackelito/ng-zendesk-webwidget/issues).

## License

MIT © [Alison Vilela](https://github.com/mackelito)

# Change log

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
