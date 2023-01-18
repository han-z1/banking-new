import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AccountRoute extends Route {
  @service store;

  async model() {
    return await this.store
      .makeRequest('http://localhost:8080/api/statement', 'GET')
      .then((response) => response.json());
  }
}
