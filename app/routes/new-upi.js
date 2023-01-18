import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class NewUpiRoute extends Route {

    @action
  willTransition(transition) {
    this.controller.upiID = undefined;
    this.controller.pin = undefined;
    this.controller.is_error = undefined;
    this.controller.error_message = undefined;
  }
}
