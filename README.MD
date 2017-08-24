# ngx-zendesk-webwidget

Zendesk-Webwidget for Angular 4+

Zendesk-Webwidget for Angular 1.x see [here](https://github.com/CrossLead/angular-zendesk-widget)

## Installation

Via npm:

```bash
$ npm install ngx-zendesk-webwidget --save
```

## Usage

#### 1. Import the `ngxZendeskWebwidgetModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ngxZendeskWebwidgetModule } from 'ngx-zendesk-webwidget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ngxZendeskWebwidgetModule.forRoot()
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
        ngxZendeskWebwidgetModule
    ]
})
export class SharedModule { }
```

##### Configuration

```ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ngxZendeskWebwidgetModule, ngxZendeskWebwidgetConfig} from 'ngx-zendesk-webwidget';

import {AppComponent} from './app';

export class ZendeskConfig extends ngxZendeskWebwidgetConfig {
  accountUrl: 'yourdomain.zendesk.com';
  beforePageLoad: (zE) => {
    zE.setLocale('en')
    zE.hide()
  };
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ngxZendeskWebwidgetModule.forRoot(ZendeskConfig)
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2. Init the `ngxZendeskWebwidgetService` for your application:

```xml
import { ngxZendeskWebwidgetService } from 'ngx-zendesk-webwidget';

@Component({
  selector: 'app',
  templateUrl: './app.html'
})
export class app {

  constructor(private _ngxZendeskWebwidgetService: ngxZendeskWebwidgetService) {
  }
}
```

#### 3. Example to usage:

```xml
  constructor(private _ngxZendeskWebwidgetService: ngxZendeskWebwidgetService) {
    _ngxZendeskWebwidgetService.identify({
     name: 'Alison Vilela',
     email: 'alison.vilela@live.nl'
    })
    _ngxZendeskWebwidgetService.show()
  }

  logout(){
    _ngxZendeskWebwidgetService.hide()
  }
}
```
## API

### ngxZendeskWebwidgetService

#### Methods:

- `setLocale(locale)`: Set locale to change language.
- `identify(userObj)`: If your user is signed in, you can use this methods for to pass the details of that user to your Zendesk.
- `hide()`: The method completely hides all parts of the Widget from the page.
- `show()`: The method displays the Widget on the host page in its starting 'button' state.
- `activate(options)`: The method activates and opens the Widget in its starting state.
- `setHelpCenterSuggestions(options)`: The method enhances the contextual help provided by the Web Widget.

For more info, see: [ZendeskAPI](https://developer.zendesk.com/embeddables/docs/widget/api)

#### ngxZendeskWebwidgetConfig:

- `accountUrl`: Url of your domain (example.zendesk.com)
- `beforePageLoad`: Callback, executed after Zendesk loaded

## Issues

Please report bugs and issues [here](https://github.com/AlisonVilela/ngx-zendesk-webwidget/issues).

## License

MIT © [Alison Vilela](https://github.com/AlisonVilela)

## Change log

### v0.1.1

- Change documentation

### v0.1.0

- Added documentation
- Initial version
