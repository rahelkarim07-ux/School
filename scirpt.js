// this is the best code
// awesome code
// hullu koodi
function add(a, b) {
    return a + b;
}

if (require.main === module) {
    const assert = require('assert');
    assert.strictEqual(add(2, 3), 5, 'add should return the sum of two numbers');
    assert.strictEqual(add(-1, 1), 0, 'add should handle negative numbers');
    console.log('All tests passed');
}

module.exports = { add };
