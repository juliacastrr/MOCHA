const assert = require('assert');
const { soma } = require('../math'); // Função de soma implementada no arquivo math.js

describe('Math Functions', function() {
  describe('sum', function() {
    it('should return 5 when adding 2 and 3', function() {
      assert.strictEqual(soma(2, 3), 5);
    });

    it('should return -1 when adding -2 and 1', function() {
      assert.strictEqual(soma(-2, 1), -1);
    });

    it('should return 0 when adding 0 and 0', function() {
      assert.strictEqual(soma(0, 0), 0);
    });
  });
});
