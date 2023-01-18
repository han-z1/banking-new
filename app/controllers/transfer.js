import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class TransferController extends Controller {
  @service store;

  @action
  async submit() {
    let beneficiaryId = this.beneficiary.beneficiary_id;
    let description = this.description;
    let amount = this.amount;
    let password = this.password;
    let requestUrl =
      'http://localhost:8080/api/transfer?beneficiary_id=' +
      beneficiaryId +
      '&description=' +
      description +
      '&amount=' +
      amount +
      '&password=' +
      password;
    if (this.upi_id) {
      requestUrl += '&upi_id=' + this.upi_id.upi_id;
    }
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

  @action
  async setBeneficiary(beneficiaryId) {
    console.log(beneficiaryId);
    for (const beneficiary of this.model.beneficiaries) {
      if (beneficiary.beneficiary_id.toString() == beneficiaryId.toString()) {
        console.log(beneficiary);
        this.set('is_upi', false);
        if (beneficiary.type === 'UPI') {
          this.set('is_upi', true);
        }
        this.set('beneficiary', beneficiary);
        break;
      }
    }
  }

  @action
  async setUPIID(upiStoreID) {
    console.log(upiStoreID);
    for (const upi of this.model.upis) {
      if (upi.upi_store_id.toString() == upiStoreID.toString()) {
        console.log(upi);
        this.set('upi_id', upi);
        break;
      }
    }
  }
}
