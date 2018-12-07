export abstract class ngxZendeskWebwidgetConfig {
  abstract lazyLoad: boolean;
  abstract accountUrl: string;
  abstract beforePageLoad(zE): any;
}
