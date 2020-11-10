# localhost HTTPS

https://www.cnblogs.com/xgqfrms/p/13845919.html


https://github.com/xgqfrms/react-in-depth/tree/master/https-app

## client

http://localhost:8080

```js
  "scripts": {
    "dev": "react-scripts start",
    "start": "export HTTPS=true && SSL_CRT_FILE=cert.pem && SSL_KEY_FILE=key.pem react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## server

http://localhost:3000

```js

  "scripts": {
    "env": "export HTTPS=true && SSL_CRT_FILE=cert.pem && SSL_KEY_FILE=key.pem",
    "dev": "node ./src/index.js",
    "app": "yarn env && yarn auto",
    "auto": "yarn open && ./node_modules/nodemon/bin/nodemon.js ./src/index.js",
    "start": "./node_modules/pm2/bin/pm2 start src/index.js",
    "open": "open http://localhost:3000",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

```



## PM2 & nodemon

https://www.cnblogs.com/xgqfrms/p/13621076.html

```sh
$ yarn add -D pm2
# OR
$ npm i -D pm2

# local
$ ./node_modules/pm2/bin/pm2 start src/index.js

$ ./node_modules/pm2/bin/pm2 list

# $ ./node_modules/pm2/bin/pm2 stop ID
$ ./node_modules/pm2/bin/pm2 stop 0

$ ./node_modules/pm2/bin/pm2 monit

```

```sh

# $ pm2 [start|restart|stop|delete] ecosystem.config.js

$ pm2 start ecosystem.config.js

```


```sh

$ yarn add -D nodemon
# OR
$ npm i -D nodemon

# local
$ ./node_modules/nodemon/bin/nodemon.js ./server.js localhost 8080

$ ./node_modules/nodemon/bin/nodemon.js --inspect ./server.js 80

# js !== cli 👎❌
# $ ./node_modules/nodemon/bin/nodemon ./src/index.js
# ✅ nodemon.js OK
$ ./node_modules/nodemon/bin/nodemon.js ./src/index.js

```


