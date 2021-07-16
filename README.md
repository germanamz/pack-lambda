# pack-lambda

Effortless lambda packaging for nodejs.

## Installation
This package its meant to be used as a *cli* tool.

```shell
npm i -g pack-lambda
```

## CLI usage
```shell
packl path/to/your/lambda/soruce output/path
```
Supported cli options ([name]?: [type] = [default])
* production?: boolean = false // process in production mode
* typescript?: boolean = false // uses typescript as the entry
* out?: string = 'index.js' // defined the output filename
* entry?: string = 'index.[tj]s' // Depending on *typescript* flag

## Node usage

```typescript
import {}
```
