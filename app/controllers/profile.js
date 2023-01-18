import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ProfileController extends Controller {
    @service store;

    @action
  async submit() {
    let mobileNumber = this.model.data.mobile_number;
    let emailID = this.model.data.email_id;

    let requestUrl =
      'http://localhost:8080/api/user?email_id=' +
      emailID +
      '&mobile_number=' +
      mobileNumber;

    let response = await this.store.makeRequest(requestUrl, 'POST');
    if (response.ok) {
      this.transitionToRoute('account');
    }

    if (response.status === 400 || response === 500) {
      let json = await response.json();
      this.set('is_error', true);
      console.log(json);
      this.set('error_message', json.message);
    }
  }
}
