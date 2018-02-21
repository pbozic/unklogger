# unklogger
A simple and colorful logger for Node.

## Installation
```bash
yarn add unklogger
```

## Test
```bash
yarn run test
```

## Usage
```javascript
const Log = require("unklogger");

Log.success("Looking good!");
// 2017-03-10 18:55:15 | Looking good!

Log.error("Server #1", "OH NO!");
// 2017-03-10 19:00:00 | [Server #1] OH NO!

Log.warn("Response", "OK", {foo: "0", bar: "1"}, [0, 1, 2]);
// 2017-03-10 19:11:07 | [Response] OK {foo: "0", bar: "1"} [0, 1, 2]

Log.info(["Multiple", "Tags"], "I Support multiple tags.");
// 2017-03-10 19:11:07 | [Multiple] [Tags] I Support multiple tags.
```
