# metalsmith-showdown
A Metalsmith plugin for converting markdown using the [showdown](https://github.com/showdownjs/showdown) library.

## Installation

```
npm install metalsmith-showdown
```

## Usage

```javascript
var metalsmith = require('metalsmith');
var showdown = require('showdown');

metalsmith
    .use(showdown({
      //options
    ))
```

## Options

### `convert`
(default ["contents"])

An array of post properties to convert (e.g. `convert: ["excerpt", "contents"]`)

### `options`
(optional, object)

Pass options to showdown.

## Example
```javascript
.use(showdown({
  convert : ["excerpt", "contents"],
  options: {
    strikethrough: true,
    tables: true,
    tasklists: true,
  },
}))
```
