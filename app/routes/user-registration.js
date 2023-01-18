import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class UserRegistrationRoute extends Route {
  @service appMeta;

  activate() {
    this.appMeta.isLogin = true;
  }

  deactivate() {
    this.appMeta.isLogin = false;
  }

  @action
  willTransition(transition) {
    this.controller.firstName = undefined;
    this.controller.lastName = undefined;
    this.controller.dob = undefined;
    this.controller.mobileNumber = undefined;
    this.controller.emailID = undefined;
    this.controller.password = undefined;
    this.controller.reenterPassword = undefined;
    this.controller.is_error = undefined;
    this.controller.error_message = undefined;
  }
}
