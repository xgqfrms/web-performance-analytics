"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-11
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

if(window.location) {
  log(`window.location =`, location)
}

for(const item in location) {
  // log(`location.${item} =`, item);
  // log(`location.${item} =`, item, typeof item);
  log(`location.${item} =`, item, location[item]);
}


// location.ancestorOrigins = ancestorOrigins DOMStringList {length: 0}
// location.href = href https://cdn.xgqfrms.xyz/?uri=web%2Bxgqfrms%3Aopen-web-app
// location.origin = origin https://cdn.xgqfrms.xyz
// location.protocol = protocol https:
// location.host = host cdn.xgqfrms.xyz
// location.hostname = hostname cdn.xgqfrms.xyz
// location.port = port
// location.pathname = pathname /
// location.search = search ?uri=web%2Bxgqfrms%3Aopen-web-app
// location.hash = hash
// location.assign = assign ƒ assign() { [native code] }
// location.reload = reload ƒ reload() { [native code] }
// location.replace = replace ƒ replace() { [native code] }
// location.toString = toString ƒ toString() { [native code] }
