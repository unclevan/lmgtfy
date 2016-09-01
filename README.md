# lmgtfy [![Build Status](https://img.shields.io/travis/vinkla/lmgtfy/master.svg?style=flat)](https://travis-ci.org/vinkla/lmgtfy)

> Let me Google that for you.

For all those people who find it more convenient to bother you with their question rather than [Google it](http://lmgtfy.com/) for themselves.

## Install

```
npm install --global lmgtfy
```

## Usage

```javascript
const lmgtfy = require('lmgtfy');

lmgtfy('github unicorns');
// http://lmgtfy.com/?q=github%20unicorns
```
## CLI

```
$ lmgtfy --help

  Usage
    $ lmgtfy <query>
  Example
    $ lmgtfy 'github unicorns'
    http://lmgtfy.com/?q=github%20unicorns
```

## License

[MIT](LICENSE) © [Vincent Klaiber](https://vinkla.com)
