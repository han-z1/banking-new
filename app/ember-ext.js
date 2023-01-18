import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

Route.reopen({
  router: service(),
  async beforeModel(transition) {
    this._super(...arguments);

    let toRoute = transition.to.name;

    if (toRoute === 'login' || toRoute === 'user-registration') {
      return;
    }

    let response = await fetch('http://localhost:8080/api/session/validate');
    if (!response.ok) {
      this.transitionTo('login');
    }
  },
});
