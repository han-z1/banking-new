import EmberRouter from '@ember/routing/router';
import config from 'banking-new/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('account');
  this.route('upi');
  this.route('beneficiary');
  this.route('transfer');
  this.route('transact');
  this.route('profile');
  this.route('new-upi');
  this.route('new-beneficiary');
  this.route('user-registration');
  this.route('login');
});
