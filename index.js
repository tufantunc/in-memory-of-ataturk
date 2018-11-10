/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/
'use strict';

const app = (lang) => {
    let quotes;
    switch(lang) {
        case 'en':
            quotes = require('./quotes/en.json');
            break;
        case 'tr':
            quotes = require('./quotes/tr.json');
            break;
        default:
            quotes = require('./quotes/en.json');
    }

    process.on('exit', function () {
        console.log(`\x1b[41m“${quotes[Math.floor(Math.random() * quotes.length)]}” M.K. Ataturk\x1b[0m`);
    });
}

module.exports = app