# jstransformer-yaml

YAML support for [JSTransformers](http://github.com/jstransformers).

## Installation

    npm install jstransformer-yaml

## API

You may also want to use [jstransformer-json][] to change the format of the
resulting JSON string.

[jstransformer-json]: https://www.npmjs.com/package/jstransformer-json

```js
const yaml = jstransformer(require('jstransformer-yaml'))
const string = `
this: foo
that:
  - bar
  - baz
`
yaml.render(string)
=> { body: '{"this":"foo","that":["bar","baz"]}',
     dependencies: [] }
```

## License

Released into the public domain under the [Unlicense](LICENSE.md).
