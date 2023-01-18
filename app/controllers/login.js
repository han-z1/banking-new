import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class LoginController extends Controller {
  @service appMeta;
  @service store;

  @action
  async submit() {
    let loginType = 'customer_id';
    if (this.is_email_login) {
      loginType = 'email_id';
    }
    let loginID = this.loginID;
    let password = this.password;

    let requestUrl =
      'http://localhost:8080/user/login?password=' +
      password +
      '&' +
      loginType +
      '=' +
      loginID;
    if (this.totp) {
      requestUrl += '&totp=' + this.totp;
    }
    let response = await this.store.makeRequest(requestUrl, 'POST');

    console.log(response);
    if (response.ok) {
      let json = await response.json();
      console.log(json);
      if (json.data) {
        this.set('validate_tfa', true);
        if (!json.data.is_tfa_enabled) {
          this.set('configure_tfa', true);
          this.set('tfa_secret', json.data.tfa_secret);
        }
        return;
      }

      let user = await this.store
        .makeRequest('http://localhost:8080/api/user', 'GET')
        .then((response) => response.json());
      this.appMeta.isBankStaff = user.data.is_bank_staff;
      if (this.appMeta.isBankStaff) {
        this.transitionToRoute('transact');
        return;
      }
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
  async setEmailLogin(isEmailLogin) {
    this.set('is_email_login', isEmailLogin);
  }
}
