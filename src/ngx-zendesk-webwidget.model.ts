export abstract class NgxZendeskWebwidgetConfig {
  abstract lazyLoad = false;
  abstract accountUrl: string;
  abstract beforePageLoad(zE): any;
}
