"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-01
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

fetch(`http://localhost:3000/`, {
  body: JSON.stringify({ key: 123 }), // must match "Content-Type" header
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  // cookies
  credentials: "same-origin", // include, same-origin, *omit
  headers: {
    // "user-agent": "Mozilla/4.0 MDN Example",
    "Content-Type": "application/json",
    // "Content-Type": "text/plain",
    // "Content-Type": "text/plain",
  },
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, cors, *same-origin
  redirect: "follow", // manual, *follow, error
  referrer: "no-referrer", // *client, no-referrer
})
  .then(response => response.json()) // parses response to JSON
  .then(json => {
    // json
    console.log(`json =`, JSON.stringify(json, null, 4));
    return json;
  })
  .catch(err => console.error(`error =`, err));


// const url = `http://localhost:3000/`;
fetch(url, {
  method: "POST",
  cors: "no",
  body: JSON.stringify({key: 123}),
})
.then(res => res.json())
.then(json => console.log(`JSON =`, JSON.stringify(json, null, 4)))
.catch(err => console.log(`fetch error`, err));
