/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

/**
 * ANSI color codes for console output
 * @constant {Object}
 */
const COLORS = {
    RED_BG: '\x1b[41m',
    RESET: '\x1b[0m'
};

/**
 * Supported languages for quotes
 * @constant {string[]}
 */
const SUPPORTED_LANGUAGES = ['en', 'tr'];

/**
 * Gets a random quote from the specified language file
 * @param {string} lang - Language code ('en' or 'tr')
 * @returns {string} A random quote
 * @throws {Error} If language is not supported or quotes file cannot be loaded
 */
const getRandomQuote = (lang) => {
    try {
        const quotes = require(`./quotes/${lang}.json`);
        return quotes[Math.floor(Math.random() * quotes.length)];
    } catch (error) {
        throw new Error(`Failed to load quotes for language: ${lang}`);
    }
};

/**
 * Initializes the quote display functionality
 * @param {string} [lang='en'] - Language code for quotes
 * @throws {Error} If provided language is not supported
 */
const app = (lang = 'en') => {
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
        throw new Error(`Unsupported language: ${lang}. Supported languages are: ${SUPPORTED_LANGUAGES.join(', ')}`);
    }

    process.on('exit', () => {
        const quote = getRandomQuote(lang);
        console.log(`${COLORS.RED_BG}"${quote}" M.K. Ataturk${COLORS.RESET}`);
    });
};

module.exports = {
    app,
    getRandomQuote
};