import { module, test } from 'qunit';
import { visit, currentURL, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'x-ray-specs/tests/helpers';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/', 'We are on the index page');
    assert.strictEqual(
      find('h1[id="title"]').textContent,
      'Congratulations, you made it!',
      'The title is correct'
    );
  });
});
