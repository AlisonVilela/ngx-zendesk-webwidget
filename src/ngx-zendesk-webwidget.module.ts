import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model';
import { NgxZendeskWebwidgetService } from './ngx-zendesk-webwidget.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class NgxZendeskWebwidgetModule {
  static forRoot(zendeskConfig: Type<NgxZendeskWebwidgetConfig>): ModuleWithProviders {
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
