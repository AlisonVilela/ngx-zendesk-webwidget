export abstract class NgxZendeskWebwidgetConfig {
  lazyLoad: boolean;
  timeOut: number;
  injectionTag: 'head' | 'body' | 'script' | string;
  abstract accountUrl: string;
  abstract callback(zE): any;
}
