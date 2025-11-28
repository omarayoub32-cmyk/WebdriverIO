const assert = require('assert');

describe('Hello World Tests', () => {
    it('should return hello when called', () => {
        const hello = () => 'hello';
        assert.strictEqual(hello(), 'hello');
    });

    it('should return world when called', () => {
        const world = () => 'world';
        assert.strictEqual(world(), 'world');
    });
});