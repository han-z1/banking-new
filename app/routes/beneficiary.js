import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BeneficiaryRoute extends Route {
  @service store;

  async model() {
    return await this.store
      .makeRequest('http://localhost:8080/api/beneficiary', 'GET')
      .then((response) => response.json());
  }
}
