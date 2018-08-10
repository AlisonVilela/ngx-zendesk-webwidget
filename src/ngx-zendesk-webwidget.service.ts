import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { ngxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model';

function getWindow (): any {
  return window;
}

interface VisibilityQueueItem {
    resolve: any;
    reject: any;
    methodName: string;
}

@Injectable()
export class ngxZendeskWebwidgetService {

  private window

  constructor(_ngxZendeskWebwidgetConfig?: ngxZendeskWebwidgetConfig) {
    if (!_ngxZendeskWebwidgetConfig.accountUrl) {
      throw new Error('Missing accountUrl. Please set in app config via ZendeskWidgetProvider');
    }

    this.window = getWindow()

    let window = this.window
    // Following is essentially a copy paste of JS portion of the Zendesk embed code
    // with our settings subbed in. For more info, see:
    // https://support.zendesk.com/hc/en-us/articles/203908456-Using-Web-Widget-to-embed-customer-service-in-your-website

    window.zEmbed || function(e, t) {
      var n, o, d, i, s, a = [],
      r = document.createElement("iframe");
      window.zEmbed = function() {
        a.push(arguments)
      }, window.zE = window.zE || window.zEmbed,
      r.src = "javascript:false",
      r.title = "",
      r.style.cssText = "display: none",
      d = document.getElementsByTagName("script"),
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
        this.zendeskHost = _ngxZendeskWebwidgetConfig.accountUrl,
        this.zEQueue=a,
        this.body.appendChild(e)
      },
      o.write('<body onload="document._l();">'),
      o.close()
    }();

    this.window.zE(() => {
        _ngxZendeskWebwidgetConfig.beforePageLoad(this.window.zE)
      }
    )
  }

  public setLocale(locale) {
    this.window.zE(() => {
      this.window.zE.setLocale(locale)
    })
  }

  public identify(userObj) {
    this.window.zE(() => {
      this.window.zE.identify(userObj)
    })
  }

  public hide() {
    this.window.zE(() => {
      this.window.zE.hide()
    })
  }

  public show() {
    this.window.zE(() => {
      this.window.zE.show()
    })
  }

  public activate(options?) {
    this.window.zE(() => {
      this.window.zE.activate(options)
    })
  }

  public setHelpCenterSuggestions(options) {
    this.window.zE(() => {
      this.window.zE.setHelpCenterSuggestions(options)
    })
  }

  public setSettings(settings) {
    this.window.zESettings = settings
  }

}
