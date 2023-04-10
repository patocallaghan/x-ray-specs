/*
  Custom Testem Adapter so we can log module test times and send them to some external service
*/

import QUnit from 'qunit';

export function sendTestMetrics() {
  if (window.Testem) {
    let moduleTestCount = 0;

    window.Testem.useCustomAdapter(function (socket) {
      QUnit.begin(function () {
        let { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit } =
          performance.memory;
        socket.emit('test-metadata', 'module-duration', {
          module: 'start',
          usedJSHeapSize,
          totalJSHeapSize,
          jsHeapSizeLimit,
        });
      });

      QUnit.moduleDone(function (params) {
        // We don't want to log submodules only top-levels QUnit modules
        moduleTestCount += params.tests.filter((t) => !t.skip).length;
        if (!params.name.includes(' > ')) {
          let { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit } =
            performance.memory;
          socket.emit('test-metadata', 'module-duration', {
            module: params.name,
            duration: params.runtime,
            testCount: moduleTestCount,
            usedJSHeapSize,
            totalJSHeapSize,
            jsHeapSizeLimit,
          });
          moduleTestCount = 0;
        }
      });

      QUnit.done(function () {
        let { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit } =
          performance.memory;
        socket.emit('test-metadata', 'module-duration', {
          module: 'end',
          usedJSHeapSize,
          totalJSHeapSize,
          jsHeapSizeLimit,
        });
      });
    });
  }
}
