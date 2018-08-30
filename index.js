/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/
'use strict';

const quotes = [
    "Everything we see in the world is the creative work of women.",
    "To see me does not necessarily mean to see my face. To understand my thoughts is to have seen me.",
    "Peace at home, peace in the world.",
    "Our true mentor in life is science.",
    "Persons, who knows that, that they will not be able to rest along the way when they took a path, will never get tired.",
    "The biggest battle is the war against ignorance.",
    "If one day, my words are against science, choose science.",
];

module.exports = process.on('exit', function () {
    console.log(`\x1b[41m“${quotes[Math.floor(Math.random() * quotes.length)]}” M.K. Ataturk\x1b[0m`);
});