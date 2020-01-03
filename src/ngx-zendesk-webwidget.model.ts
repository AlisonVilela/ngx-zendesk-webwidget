export abstract class NgxZendeskWebwidgetConfig {
  abstract lazyLoad = false;
  abstract timeOut: number;
  abstract accountUrl: string;
  abstract beforePageLoad(zE): any;
}
