import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class NewBeneficiaryRoute extends Route {

    @action
  willTransition(transition) {
    this.controller.nickName = undefined;
    this.controller.referenceNumber = undefined;
    this.controller.type = undefined;
    this.controller.is_error = undefined;
    this.controller.error_message = undefined;
  }
}
