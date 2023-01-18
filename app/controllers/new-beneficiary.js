import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class NewBeneficiaryController extends Controller {
  @service store;

  @action
  async submit() {
    let nickName = this.nickName;
    let referenceNumber = this.referenceNumber;

    let requestUrl =
      'http://localhost:8080/api/beneficiary?nick_name=' +
      nickName +
      '&' +
      this.type +
      '=' +
      referenceNumber;

    let response = await this.store.makeRequest(requestUrl, 'POST');
    if (response.ok) {
      this.transitionToRoute('beneficiary');
    }

    if (response.status === 400 || response === 500) {
      let json = await response.json();
      this.set('is_error', true);
      console.log(json);
      this.set('error_message', json.message);
    }
  }

  @action
  async setType(type) {
    console.log(type);
    this.set('type', type);
    this.set('account_number', false);
    this.set('mobile_number', false);
    this.set('upi_id', false);
    this.set(type, true);
  }
}
