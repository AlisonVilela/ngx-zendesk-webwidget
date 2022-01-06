export interface NgxZendeskWebwidgetConfig {
  lazyLoad?: boolean;
  timeOut?: number;
  injectionTag?: 'head' | 'body' | 'script' | string;
  accountUrl: string;
  callback(zE: any): any;
}
