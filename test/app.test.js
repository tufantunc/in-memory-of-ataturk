const assert = require('assert');
const sinon = require('sinon');
const { app, getRandomQuote } = require('../index');

describe('App', () => {
    beforeEach(() => {
        sinon.stub(console, 'log');
        // Clear any existing exit listeners
        process.removeAllListeners('exit');
    });

    afterEach(() => {
        console.log.restore();
        // Clear exit listeners after each test
        process.removeAllListeners('exit');
    });

    it('must show quote after process.exit', () => {
        app('tr');
        process.emit('exit');
        assert.equal(console.log.calledOnce, true);
    });

    it('should throw error for unsupported language', () => {
        assert.throws(() => {
            app('fr');
        }, {
            name: 'Error',
            message: 'Unsupported language: fr. Supported languages are: en, tr'
        });
    });

    it('should use English as default language', () => {
        app(); // No language specified
        process.emit('exit');
        assert.equal(console.log.calledOnce, true);
    });
});

describe('getRandomQuote', () => {
    it('should return a random quote for supported languages', () => {
        const enQuote = getRandomQuote('en');
        const trQuote = getRandomQuote('tr');
        
        assert.equal(typeof enQuote, 'string');
        assert.equal(typeof trQuote, 'string');
    });

    it('should throw error for invalid language file', () => {
        // Temporarily rename require to simulate module not found
        const originalRequire = require;
        require = function(path) {
            if (path.includes('invalid')) {
                throw new Error('Module not found');
            }
            return originalRequire(path);
        };

        assert.throws(() => {
            getRandomQuote('invalid');
        }, {
            name: 'Error',
            message: 'Failed to load quotes for language: invalid'
        });

        // Restore original require
        require = originalRequire;
    });
});