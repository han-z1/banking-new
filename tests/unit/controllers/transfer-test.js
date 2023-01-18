import { module, test } from 'qunit';
import { setupTest } from 'banking-new/tests/helpers';

module('Unit | Controller | transfer', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:transfer');
    assert.ok(controller);
  });
});
