import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class TransactController extends Controller {
  @service store;

  @action
  async submit() {
    let type = this.type;
    let accountNumber = this.accountNumber;
    let description = this.description;
    let amount = this.amount;
    let requestUrl =
      'http://localhost:8080/admin/transact?transaction_type=' +
      type +
      '&account_number=' +
      accountNumber +
      '&description=' +
      description +
      '&amount=' +
      amount;
    let response = await this.store.makeRequest(requestUrl, 'POST');
    if (response.ok) {
      this.set('accountNumber', '');
      this.set('description', '');
      this.set('amount', '');
      this.set('is_error', undefined);
      this.set('error_message', undefined);
      this.set('is_success', true);
      this.set('success_message', "Transaction completed successfully!");
    }

    if (response.status === 400 || response === 500) {
      let json = await response.json();
      this.set('is_success', false);
      this.set('success_message', "");
      this.set('is_error', true);
      console.log(json);
      this.set('error_message', json.message);
    }
  }

  @action
  async setType(type) {
    this.set('type', type);
  }
}
