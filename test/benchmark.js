/*
Very basic script to benchmark how quickly node-uuid and other libs can
generate UUIDs.
*/
function bench(f, msg, n) {
  var start = Date.now();
  for (var i = 0; i < n; i++) {
    f();
  }
  var t = Date.now() - start;
  console.log(msg + ': ' + (n / (t / 1000) | 0) + ' times per second');
}

var n = 5e5;
// 'uuid' from https://bitbucket.org/nikhilm/uuidjs
bench(require('uuid').generate, 'uuid.js', n);

// Benchmark node-uuid against other uuid libraries
bench(require('../uuid'), 'node-uuid', n);

