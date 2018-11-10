const assert = require('assert');
const sinon = require('sinon');

describe('App', () => {
    before(() => {
        sinon.stub(console, 'log');
    });

    after(() => {
        console.log.restore();
    });

    it('must show quote after process.exit', () => {
        require('../index')('tr');
        process.emit('exit');
        assert.equal(console.log.calledOnce, true);
    });
});