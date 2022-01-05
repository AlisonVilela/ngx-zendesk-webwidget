export abstract class NgxZendeskWebwidgetConfig {
  abstract lazyLoad: boolean;
  abstract timeOut: number;
  abstract injectionTag: 'head' | 'body' | 'script' | string;
  abstract accountUrl: string;
  abstract callback(zE: any): any;
}
