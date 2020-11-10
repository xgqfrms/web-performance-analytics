# web-performance-analytics

> WPA

https://www.npmjs.com/package/web-performance-analytics

## install

```sh

$ yarn add web-performance-analytics
# OR
$ npm i web-performance-analytics

```

## usage

```js
// WebPerformanceAnalytics
import * as WPA from "web-performance-analytics";

const options = {
  // your configs
};

const wpa = WPA.init(options);

wpa.onConnect({
  // options
});

wpa.tracker({
  // options
});

wpa.send({
  // options
});

wpa.post({
  // options
});

wpa.report({
  // options
});

wpa.onError({
  // options
});

wpa.onClose({
  // options
});

```

# demo

```js
// ESM

```

