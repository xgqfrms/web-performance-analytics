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

let startTime = performance.now();

window.addEventListener(`load`, (e) => {
  log(`window load`);
  log(`page is fully loaded`);
});

window.addEventListener(`DOMContentLoaded`, (e) => {
  log(`window DOMContentLoaded`);
  // log(`DOM fully loaded and parsed`);
});

const logVisit = (url = ``) => {
  // Test that we have support
  if (!navigator.sendBeacon) {
    // XHR fallback
    return true;
  } else {
  // URL to send the data to, e.g.
  // let url = `/api/log`;
  // Data to send
  let data = new FormData();
  data.append(`start`, startTime);
  data.append(`end`, performance.now());
  data.append(`url`, document.URL);
  // Let`s go!
  navigator.sendBeacon(url, data);
  }
};

// 将日志记录封装到一个函数中，则可以在页面卸载时调用它。
window.addEventListener(`pagehide`, (e) => {
  log(`window beforeunload`);
  // ✅ good place for sendBeacon
  logVisit(`/api/log`);
  if (event.persisted) {
    /* the page isn't being discarded, so it can be reused later */
  }
}, false);



document.addEventListener(`visibilitychange`, (e) => {
// window.addEventListener(`visibilitychange`, (e) => {
  log(`document.visibilityState`, document.visibilityState);
  // if (document.visibilityState === `hidden`) {
  // if (document.visibilityState === `visible`) {
  //   backgroundMusic.play();
  // } else {
  //   backgroundMusic.pause();
  // }
  // log(`window visibilitychange`);
  // ✅ good place for sendBeacon
  logVisit(`/api/log`);
});



window.addEventListener(`beforeunload`, (e) => {
  log(`window beforeunload`);
  // ❌ bad place for sendBeacon
  // logVisit(`/api/log`);
});

window.addEventListener(`unload`, (e) => {
  log(`window unload`);
  // ❌ bad place for sendBeacon
  // logVisit(`/api/log`);
});


// navigator.sendBeacon(`https://www.xgqfrms.xyz/`, `hello ✅`);
