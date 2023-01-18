import { module, test } from 'qunit';
import { setupTest } from 'banking-new/tests/helpers';

module('Unit | Route | upi', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:upi');
    assert.ok(route);
  });
});
