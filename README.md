# Stackrabbit Bunyan [Coming Soon]

[![Circle CI](https://circleci.com/gh/danethurber/stackrabbit-bunyan.svg?style=shield)](https://circleci.com/gh/danethurber/stackrabbit-bunyan)

Bunyan logging middleware for stackrabbit

## Installation

```
npm install stackrabbit-bunyan
```

## Getting Started

```js
const stackrabbit = require('stackrabbit')
const bunyan = require('bunyan')
const bunyanMiddleware = require('stackrabbit-bunyan')
const logger = bunyan.createLogger(...)

const listener = stackrabbit({
  ...
})

listener.use(bunyanMiddleware({
  logger: logger
}))

listener.listen(function * () {
})

listener.connect()
```
