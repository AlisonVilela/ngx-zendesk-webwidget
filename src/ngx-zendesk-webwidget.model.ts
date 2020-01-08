export abstract class NgxZendeskWebwidgetConfig {
  lazyLoad: boolean;
  timeOut: number;
  abstract accountUrl: string;
  abstract callback(zE): any;
}
