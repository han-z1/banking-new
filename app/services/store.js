import Service, { inject as service } from '@ember/service';

export default Service.extend({
  router: service(),
  async makeRequest(url, method) {
    let response = await fetch(url, {
      method: method,
    });

    if (response.status == 401) {
      this.router.transitionTo('login');
    }
    return response;
  },
});
