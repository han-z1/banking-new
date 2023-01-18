import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class UpiRoute extends Route {
  @service store;

  async model() {
    return await this.store
      .makeRequest('http://localhost:8080/api/upi', 'GET')
      .then((response) => response.json());
  }
}
