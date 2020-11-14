"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-10-01
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

const Koa = require('koa');
const app = new Koa();

// logger
app.use(async (ctx, next) => {
  log(`🔖 1`)
  await next();
  log(`🔖 2`)
  const rt = ctx.response.get('X-Response-Time');
  log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  log(`🔖 3`)
  await next();
  log(`🔖 4`)
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response
app.use(async ctx => {
  log(`🔖 5`)
  ctx.body = 'Hello World';
});

app.listen(3000);
