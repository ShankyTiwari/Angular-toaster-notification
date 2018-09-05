import { Component } from '@angular/core';
import { ToasterService, Toast, ToasterConfig, BodyOutputType } from 'angular2-toaster';

import { ToasterComponent } from './toaster.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private toasterService: ToasterService;
  public config: ToasterConfig = new ToasterConfig({
    animation: 'fade',
    positionClass: 'toast-top-left'
  });

  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  showSuccess() {
    this.toasterService.pop('success', 'Success', 'This is success notification');
  }

  showError() {
    const toast: Toast = {
      type: 'error',
      title: 'Error',
      body: 'This is error message',
    };
    this.toasterService.pop(toast);
  }

  showWarning() {
    const toast: Toast = {
      type: 'warning',
      title: 'Error',
      body: 'This is error message',
    };
    this.toasterService.pop(toast);
  }

  showInfo() {
    const toast: Toast = {
      type: 'info',
      title: 'Error',
      body: 'This is error message',
    };
    this.toasterService.pop(toast);
  }

  showCustom() {
    const toast: Toast = {
      type: 'info',
      title: 'Custom HTML',
      body: `<div style="display:flex;width:400px">
              <div style='background:rgba(2, 2, 2, 0.4);height:100px;width:40%;text-align:center'>Message</div>
              <div style='background:#d2d2d2;height:100px;width:40%;text-align:center'>Message</div>
            </div>`,
      bodyOutputType : 1
    };
    this.toasterService.pop(toast);
  }

  beforeNotification() {
    const toast: Toast = {
      type: 'error',
      title: 'Error',
      body: 'This is error message',
      onShowCallback: function () {
        console.log('Toaster is about show up');
      }
    };
    this.toasterService.pop(toast);
  }

  afterNotification() {
    const toast: Toast = {
      type: 'error',
      title: 'Error',
      body: 'This is error message',
      onHideCallback: function () {
        console.log('Toaster is gone');
      }
    };
    this.config.positionClass = 'toast-bottom-left';
    this.toasterService.pop(toast);
  }

  leftTop() {
    const toast: Toast = {
      type: 'info',
      title: 'Error',
      body: 'This is error message',
    };
    this.config.positionClass = 'toast-top-left';
    this.toasterService.pop(toast);
  }

  leftBottom() {
    const toast: Toast = {
      type: 'info',
      title: 'Error',
      body: 'This is error message',
    };
    this.config.positionClass = 'toast-bottom-left';
    this.toasterService.pop(toast);
  }

  rightTop() {
    const toast: Toast = {
      type: 'info',
      title: 'Error',
      body: 'This is error message',
    };
    this.config.positionClass = 'toast-top-right';
    this.toasterService.pop(toast);
  }

  rightBottom() {
    const toast: Toast = {
      type: 'info',
      title: 'Error',
      body: 'This is error message',
    };
    this.config.positionClass = 'toast-bottom-right';
    this.toasterService.pop(toast);
  }

  bottomCenter() {
    const toast: Toast = {
      type: 'info',
      title: 'Error',
      body: 'This is error message',
    };
    this.config.positionClass = 'toast-bottom-center';
    this.toasterService.pop(toast);
  }

  topCenter() {
    const toast: Toast = {
      type: 'info',
      title: 'Error',
      body: 'This is error message',
    };
    this.config.positionClass = 'toast-top-center';
    this.toasterService.pop(toast);
  }

  topFullWidth() {
    const toast: Toast = {
      type: 'info',
      title: 'Error',
      body: 'This is error message',
    };
    this.config.positionClass = 'toast-top-full-width';
    this.toasterService.pop(toast);
  }

  bottomFullWidth() {
    const toast: Toast = {
      type: 'info',
      title: 'Error',
      body: 'This is error message',
    };
    this.config.positionClass = 'toast-bottom-full-width';
    this.toasterService.pop(toast);
  }

  fadeAnimation() {
    this.config.animation = 'fade';
    this.toasterService.pop('success', 'Success', 'This is success notification');
  }

  flyLeftAnimation() {
    this.config.animation = 'flyLeft';
    this.toasterService.pop('success', 'Success', 'This is success notification');
  }

  flyRightAnimation() {
    this.config.animation = 'flyRight';
    this.toasterService.pop('success', 'Success', 'This is success notification');
  }

  slideDownAnimation() {
    this.config.animation = 'slideDown';
    this.toasterService.pop('success', 'Success', 'This is success notification');
  }

  slideUpAnimation() {
    this.config.animation = 'slideUp';
    this.toasterService.pop('success', 'Success', 'This is success notification');
  }

  showComponentToaster() {
    const toast: Toast = {
      type: 'info',
      title: 'Error',
      body: ToasterComponent,
      bodyOutputType: BodyOutputType.Component
    };
    this.config.positionClass = 'toast-top-right';
    this.toasterService.pop(toast);
  }
}
