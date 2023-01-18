import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class NewUpiController extends Controller {
  @service store;

  @action
  async submit() {
    let upiID = this.upiID;
    let pin = this.pin;
    let requestUrl =
      'http://localhost:8080/api/upi?upi_id=' + upiID + '&upi_pin=' + pin;
    let response = await this.store.makeRequest(requestUrl, 'POST');
    if (response.ok) {
      this.transitionToRoute('upi');
    }

    if (response.status === 400 || response === 500) {
      let json = await response.json();
      this.set('is_error', true);
      console.log(json);
      this.set('error_message', json.message);
    }
  }
}
