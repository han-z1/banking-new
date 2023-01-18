import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class UserRegistrationController extends Controller {
  @service store;

  @action
  async submit() {
    let firstName = this.firstName;
    let lastName = this.lastName;
    let dob = this.dateOfBirth;
    let mobileNumber = this.mobileNumber;
    let emailID = this.emailID;
    let password = this.password;
    let reenterPassword = this.reenterPassword;

    if (password !== reenterPassword) {
      password = '';
    }

    let requestUrl =
      'http://localhost:8080/user/register?first_name=' +
      firstName +
      '&last_name=' +
      lastName +
      '&date_of_birth=' +
      dob +
      '&mobile_number=' +
      mobileNumber +
      '&email_id=' +
      emailID +
      '&password=' +
      password;
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
