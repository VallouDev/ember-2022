import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | order/id_order', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:order/id-order');
    assert.ok(route);
  });
});
