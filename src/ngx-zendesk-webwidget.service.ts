import { Injectable } from '@angular/core';

import { NgxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model';

function getWindow(): any {
  return window;
}

@Injectable()
export class NgxZendeskWebwidgetService {

  private window;
  private initialized = false;
  public zE;

  constructor(private ngxZendeskWebwidgetConfig?: NgxZendeskWebwidgetConfig) {
    if (!this.ngxZendeskWebwidgetConfig.accountUrl) {
      throw new Error('Missing accountUrl. Please set in app config via ZendeskWidgetProvider');
    }

    this.window = getWindow();

    if (!this.ngxZendeskWebwidgetConfig.lazyLoad) {
      this.initZendesk(this.ngxZendeskWebwidgetConfig);
    }
  }

  public initZendesk(config: NgxZendeskWebwidgetConfig): Promise<boolean> {
    const window = this.window;

    // tslint:disable
    window.zEmbed || function(e, t) {
      var n, o, d, i, s, a = [],
      r = document.createElement("iframe");
      window.zEmbed = function() {
        a.push(arguments)
      }, window.zE = window.zE || window.zEmbed,
      r.src = "javascript:false",
      r.title = "",
      r.style.cssText = "display: none",
      d = document.getElementsByTagName(this.ngxZendeskWebwidgetConfig.injectionTag || "head"),
      d = d[d.length - 1],
      d.parentNode.insertBefore(r, d),
      i = r.contentWindow,
      s = i.document;
      try {
        o = s
      } catch (e) {
        n = document.domain, r.src = 'javascript:var d=document.open();d.domain="' + n + '";void(0);',
        o = s
      }
      o.open()._l = function() {
        var e = this.createElement("script");
        n && (this.domain = n),
        e.id = "js-iframe-async",
        e.src = "https://assets.zendesk.com/embeddable_framework/main.js",
        this.t=+new Date,
        this.zendeskHost = config.accountUrl,
        this.zEQueue=a,
        this.body.appendChild(e)
      },
      o.write('<body onload="document._l();">'),
      o.close()
    }();
    // tslint:enable

    return this.finishLoading();
  }

  private finishLoading(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {

      const timeout = setTimeout(() => {
        this.initialized = false;
        reject(Error('timeout'));
      }, this.ngxZendeskWebwidgetConfig.timeOut || 30000); // 30 seconds

      this.window.zE(() => {
        this.ngxZendeskWebwidgetConfig.callback(this.window.zE);
        this.initialized = true;
        this.zE = this.window.zE;
        clearTimeout(timeout);
        resolve(true);
      });
    });
  }

  public isInitialized(): boolean {
    return this.initialized;
  }
}
