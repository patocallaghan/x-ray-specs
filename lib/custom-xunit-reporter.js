/* eslint-env node */
const XUnitReporter = require('testem/lib/reporters/xunit_reporter');

class CustomXUnitReporter extends XUnitReporter {
  reportMetadata(
    tag,
    {
      module,
      duration,
      usedJSHeapSize,
      totalJSHeapSize,
      jsHeapSizeLimit,
      testCount,
    }
  ) {
    if (tag === 'module-duration') {
      // You could combine the browser metadata with some server metadata and
      // send it to some external service here
      console.log({
        module,
        duration,
        test_count: testCount,
        used_js_heap_size: usedJSHeapSize / Math.pow(1000, 2),
        total_js_heap_size: totalJSHeapSize / Math.pow(1000, 2),
        js_heap_size_limit: jsHeapSizeLimit / Math.pow(1000, 2),
      });
    }
  }
}

module.exports = CustomXUnitReporter;
