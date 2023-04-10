import Application from 'x-ray-specs/app';
import config from 'x-ray-specs/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import { sendTestMetrics } from 'x-ray-specs/tests/helpers/testem';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

sendTestMetrics();

start();
