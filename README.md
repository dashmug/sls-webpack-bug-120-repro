Attempt to reproduce bug

Steps to reproduce:

1. `yarn install` after cloning this project.

2. `yarn package` (or `sls package`) should work fine and produce two zip files (one for each function) inside `
.serverless`.


However, if you update `serverless` version to v1.18.0 and do `yarn package` again, it will now return an error.

```
Serverless: Packaging service...
TypeError: Path must be a string. Received undefined
    at assertPath (path.js:7:11)
    at Object.basename (path.js:1355:5)
    at functionNames.forEach.name (/Users/noel/Documents/workspace/sls-webpack-bug-120-repro/node_modules/serverless-webpack/lib/cleanup.js:27:28)
    at Array.forEach (native)
    at fse.copy (/Users/noel/Documents/workspace/sls-webpack-bug-120-repro/node_modules/serverless-webpack/lib/cleanup.js:23:31)
    at doneOne (/Users/noel/Documents/workspace/sls-webpack-bug-120-repro/node_modules/fs-extra/lib/copy/ncp.js:237:40)
    at /Users/noel/Documents/workspace/sls-webpack-bug-120-repro/node_modules/fs-extra/lib/copy/ncp.js:122:11
    at /Users/noel/Documents/workspace/sls-webpack-bug-120-repro/node_modules/graceful-fs/polyfills.js:239:18
    at FSReqWrap.oncomplete (fs.js:123:15)
```
