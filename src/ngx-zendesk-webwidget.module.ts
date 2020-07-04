import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { NgxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model';
import { NgxZendeskWebwidgetService } from './ngx-zendesk-webwidget.service';

@NgModule({})
export class NgxZendeskWebwidgetModule {
  static forRoot(zendeskConfig: Type<NgxZendeskWebwidgetConfig>): ModuleWithProviders<NgxZendeskWebwidgetModule> {
    return {
      ngModule: NgxZendeskWebwidgetModule,
      providers: [
        {provide: NgxZendeskWebwidgetConfig, useClass: zendeskConfig },
        {provide: NgxZendeskWebwidgetService, useClass: NgxZendeskWebwidgetService, deps: [NgxZendeskWebwidgetConfig] }
      ]
    };
  }
}

export {
  NgxZendeskWebwidgetService,
  NgxZendeskWebwidgetConfig
};
