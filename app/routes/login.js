import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class LoginRoute extends Route {
  @service appMeta;

  activate() {
    this.appMeta.isLogin = true;
  }

  deactivate() {
    this.appMeta.isLogin = false;
  }

  @action
  willTransition(transition) {
    this.controller.is_email_login = undefined;
    this.controller.loginID = undefined;
    this.controller.password = undefined;
    this.controller.totp = undefined;
    this.controller.validate_tfa = undefined;
    this.controller.configure_tfa = undefined;
    this.controller.tfa_secret = undefined;
    this.controller.is_error = undefined;
    this.controller.error_message = undefined;

  }
}
