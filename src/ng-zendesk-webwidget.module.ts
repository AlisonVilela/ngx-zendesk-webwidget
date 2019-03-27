import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZendeskWebwidgetConfig } from './ng-zendesk-webwidget.model';
import { ZendeskWebwidgetService } from './ng-zendesk-webwidget.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class ZendeskWebwidgetModule {
  static forRoot(zendeskConfig: Type<ZendeskWebwidgetConfig>): ModuleWithProviders {
    return {
      ngModule: ZendeskWebwidgetModule,
      providers: [
        {provide: ZendeskWebwidgetConfig, useClass: zendeskConfig },
        {provide: ZendeskWebwidgetService, useClass: ZendeskWebwidgetService, deps: [ZendeskWebwidgetConfig] }
      ]
    };
  }
}

export {
    ZendeskWebwidgetService,
    ZendeskWebwidgetConfig
};
