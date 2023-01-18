import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ProfileRoute extends Route {
  @service store;

  async model() {
    return await this.store
      .makeRequest('http://localhost:8080/api/user', 'GET')
      .then((response) => response.json());
  }

  @action
  willTransition(transition) {
    this.controller.is_error = undefined;
    this.controller.error_message = undefined;
  }
}
