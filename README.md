# shortest-api

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/shortest-api.svg)](https://greenkeeper.io/)

![Last version](https://img.shields.io/github/tag/Kikobeats/shortest-api.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/shortest-api/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/shortest-api)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/shortest-api.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/shortest-api)
[![Dependency status](https://img.shields.io/david/Kikobeats/shortest-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/shortest-api)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/shortest-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/shortest-api#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/shortest-api.svg?style=flat-square)](https://www.npmjs.org/package/shortest-api)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> API Client for connect with [shorte.st](https://shorte.st/).

## Install

```bash
$ npm install shortest-api --save
```

## Usage

```js
const shortestAPI = require('shortest-api')

const shortest = shortestAPI({
  token: 'MY_TOKEN'
})

shortest('https://kikobeats.com', function (err, shortenURL) {
  if (err) throw err
  console.log(shortenURL) // => 'http://sh.st/3s2xg'
  /* do something */
})
```

## API

### shortestAPI({options})

It creates an API client.

#### options

##### token

*Required*<br>
Type: `string`

The service token.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
