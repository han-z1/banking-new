import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default Service.extend({
  @tracked isLogin: false,
  @tracked isBankStaff: false,
});
