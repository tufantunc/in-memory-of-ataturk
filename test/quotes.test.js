const assert = require('assert');
const enQuotes = require('../quotes/en.json');
const trQuotes = require('../quotes/tr.json');

describe('Quote files', () => {
    it('must have quote list in Array', (done) => {
        assert.equal(Array.isArray(enQuotes), true);
        assert.equal(Array.isArray(trQuotes), true);
        done();
    });
    it('must have quotes in string format', (done)=>{
        enQuotes.forEach(quote => {
            assert.equal(typeof quote, 'string');
        });
        trQuotes.forEach(quote => {
            assert.equal(typeof quote, 'string');
        });
        done();
    });
});