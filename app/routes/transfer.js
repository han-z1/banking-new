import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class TransferRoute extends Route {
  @service store;

  async model() {
    let beneficiaryJSON = await this.store
      .makeRequest('http://localhost:8080/api/beneficiary', 'GET')
      .then((response) => response.json());
    let upiJSON = await this.store
      .makeRequest('http://localhost:8080/api/upi', 'GET')
      .then((response) => response.json());
    let json = {};
    json.beneficiaries = beneficiaryJSON.data;
    json.upis = upiJSON.data;
    return json;
  }

  @action
  willTransition(transition) {
    this.controller.beneficiary = undefined;
    this.controller.description = undefined;
    this.controller.amount = undefined;
    this.controller.password = undefined;
    this.controller.is_upi = undefined;
    this.controller.upi_id = undefined;
    this.controller.is_error = undefined;
    this.controller.error_message = undefined;
    
  }

  // @action
  // didTransition(transition) {
  //   this.controller.form = {};
  // }
}
