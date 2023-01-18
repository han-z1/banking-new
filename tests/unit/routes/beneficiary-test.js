import { module, test } from 'qunit';
import { setupTest } from 'banking-new/tests/helpers';

module('Unit | Route | beneficiary', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:beneficiary');
    assert.ok(route);
  });
});
