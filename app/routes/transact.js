import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class TransactRoute extends Route {

    @action
  willTransition(transition) {
    this.controller.type = undefined;
    this.controller.accountNumber = undefined;
    this.controller.description = undefined;
    this.controller.amount = undefined;
    this.controller.is_error = undefined;
    this.controller.error_message = undefined;
  }
}
