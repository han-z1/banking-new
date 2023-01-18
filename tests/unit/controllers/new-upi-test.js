import { module, test } from 'qunit';
import { setupTest } from 'banking-new/tests/helpers';

module('Unit | Controller | new-upi', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:new-upi');
    assert.ok(controller);
  });
});
